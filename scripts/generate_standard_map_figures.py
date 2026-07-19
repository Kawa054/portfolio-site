#!/usr/bin/env python3
"""Generate phase portraits for the standard map used on the research page."""

from __future__ import annotations

import os
from pathlib import Path

os.environ.setdefault("MPLCONFIGDIR", "/tmp/matplotlib")

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
import numpy as np


TAU = 2.0 * np.pi
EPSILONS = (0.0, 0.1, 0.2, 0.5, 0.8, 1.0)
PALETTE = (
    "#006d77",
    "#c2410c",
    "#1d4f91",
    "#3f7d20",
    "#9d3d7d",
    "#5b3fa3",
    "#a66f00",
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "dyn" / "standard-map"


def iterate_standard_map(epsilon: float) -> tuple[np.ndarray, np.ndarray]:
    """Return theta and I samples with theta as the horizontal coordinate."""
    orbit_count = 96
    burn_in = 100
    sample_count = 600

    action = np.linspace(0.06, TAU - 0.06, orbit_count)
    angle = np.where(np.arange(orbit_count) % 2 == 0, 0.13, np.pi + 0.13)

    theta_samples = np.empty((sample_count, orbit_count))
    action_samples = np.empty_like(theta_samples)

    for step in range(burn_in + sample_count):
        action = (action + epsilon * np.sin(angle)) % TAU
        angle = (angle + action) % TAU

        if step >= burn_in:
            sample_index = step - burn_in
            theta_samples[sample_index] = angle
            action_samples[sample_index] = action

    return theta_samples, action_samples


def render_phase_portrait(epsilon: float) -> Path:
    theta, action = iterate_standard_map(epsilon)

    fig, ax = plt.subplots(figsize=(6.8, 6.8), dpi=170)
    fig.patch.set_facecolor("#ffffff")
    ax.set_facecolor("#ffffff")

    for orbit_index in range(theta.shape[1]):
        ax.scatter(
            theta[:, orbit_index],
            action[:, orbit_index],
            s=2.2,
            color=PALETTE[orbit_index % len(PALETTE)],
            alpha=0.92,
            linewidths=0,
        )

    ax.set_xlim(0.0, TAU)
    ax.set_ylim(0.0, TAU)
    ax.set_aspect("equal", adjustable="box")
    ax.set_xticks((0.0, np.pi, TAU), ("0", r"$\pi$", r"$2\pi$"))
    ax.set_yticks((0.0, np.pi, TAU), ("0", r"$\pi$", r"$2\pi$"))
    x_tick_labels = ax.get_xticklabels()
    x_tick_labels[0].set_horizontalalignment("left")
    x_tick_labels[-1].set_horizontalalignment("right")
    ax.set_xlabel(r"$\theta_m$", fontsize=26, labelpad=4)
    ax.set_ylabel(r"$I_m$", fontsize=26, labelpad=4, rotation=0, va="center", ha="center")
    ax.yaxis.set_label_coords(-0.13, 0.5)
    ax.text(
        0.97,
        0.95,
        rf"$\varepsilon={epsilon:g}$",
        transform=ax.transAxes,
        ha="right",
        va="top",
        fontsize=22,
        color="#18181b",
        bbox={"boxstyle": "round,pad=0.25", "facecolor": "white", "edgecolor": "#d4d4d8", "alpha": 0.92},
    )

    ax.tick_params(axis="both", which="major", labelsize=20, colors="#18181b", length=6, width=1.3)
    for spine in ax.spines.values():
        spine.set_color("#27272a")
        spine.set_linewidth(1.35)

    fig.subplots_adjust(left=0.16, right=0.985, bottom=0.135, top=0.985)
    suffix = str(epsilon).replace(".", "-")
    output_path = OUTPUT_DIR / f"epsilon-{suffix}.png"
    fig.savefig(output_path, dpi=170, facecolor=fig.get_facecolor())
    plt.close(fig)
    return output_path


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for epsilon in EPSILONS:
        output_path = render_phase_portrait(epsilon)
        print(output_path.relative_to(ROOT))


if __name__ == "__main__":
    main()
