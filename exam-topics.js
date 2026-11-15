// Each question belongs to its main topic for chapter practice.
window.HEAT_TOPICS = [
  {
    "id": "foundations",
    "label": "温度、平衡态与理想气体",
    "description": "温标、第零定律、物态方程、分压、热膨胀"
  },
  {
    "id": "statistics",
    "label": "分子运动与统计分布",
    "description": "概率与涨落、碰撞、麦克斯韦分布、玻尔兹曼分布、能均分"
  },
  {
    "id": "real-gas",
    "label": "实际气体与临界现象",
    "description": "分子相互作用、范德瓦耳斯方程、实际气体的内能与节流、临界点"
  },
  {
    "id": "first-law",
    "label": "热力学第一定律与典型过程",
    "description": "热、功、内能、焓、热容与量热，等值、绝热及多方过程"
  },
  {
    "id": "second-law",
    "label": "热力学第二定律、熵与热机",
    "description": "可逆与不可逆、熵变、循环效率、卡诺热机与制冷"
  },
  {
    "id": "transport",
    "label": "扩散、黏滞与热传导",
    "description": "物质、动量和能量的输运，各类通量、系数与传热"
  },
  {
    "id": "interfaces",
    "label": "表面张力与毛细现象",
    "description": "表面能、附加压强、接触角、润湿及弯月面"
  },
  {
    "id": "phases",
    "label": "相平衡与相变",
    "description": "相图、三相点、饱和蒸气压、湿度、潜热与克拉珀龙方程"
  }
];
window.HEAT_TOPIC_BY_ID = Object.create(null);

for (const [topic, rows] of Object.entries({
  "foundations": [
    "a-4 a-5 a-6 a-18 a-26 a-29 a-32 a-44 a-53 a-62",
    "b-4 b-10 b-11 b-22 b-25 b-31 b-34 b-42 b-48 b-51",
    "b-56 v-10 v-4 v-45 c-equilibrium-wall-constraints c-zeroth-law-gauges c-thermal-hole c-bimetal-strip-sense c-isotropic-area-expansion c-anomalous-water-order",
    "c-equal-temperature-not-identical-state c-partial-pressure-selective-wall c-piston-load-double-equilibrium p-21 p-62 p-64 p-102 p-104 p-106 p-109",
    "p-114 p-128 p-168 p-171 p-280 p-290 p-300 p-305 p-309 p-337",
    "p-350 p-359 p-374 p-426 t-rigid-vessel-temperature-1 t-dalton-partial-pressure-1 t-joined-vessels-1 t-gas-mass-pressure-1 t-linear-expansion-1 t-rigid-vessel-temperature-2",
    "t-dalton-partial-pressure-2 t-joined-vessels-2 t-gas-mass-pressure-2 t-linear-expansion-2 t-rigid-vessel-temperature-3 t-dalton-partial-pressure-3 t-joined-vessels-3 t-gas-mass-pressure-3 t-linear-expansion-3 t-rigid-vessel-temperature-4",
    "t-dalton-partial-pressure-4 t-joined-vessels-4 t-gas-mass-pressure-4 t-linear-expansion-4 t-rigid-vessel-temperature-5 t-dalton-partial-pressure-5 t-joined-vessels-5 t-gas-mass-pressure-5 t-linear-expansion-5 t-rigid-vessel-temperature-6",
    "t-dalton-partial-pressure-6 t-joined-vessels-6 t-gas-mass-pressure-6 t-linear-expansion-6 u-selective-particle-removal-1 u-gauge-pressure-heating-1 u-state-coefficients-isochoric-1 u-selective-particle-removal-2 u-gauge-pressure-heating-2 u-state-coefficients-isochoric-2",
    "u-selective-particle-removal-3 u-gauge-pressure-heating-3 u-state-coefficients-isochoric-3 u-selective-particle-removal-4 u-gauge-pressure-heating-4 u-state-coefficients-isochoric-4 u-selective-particle-removal-5 u-gauge-pressure-heating-5 u-state-coefficients-isochoric-5"
  ],
  "statistics": [
    "a-1 a-11 a-13 a-15 a-20 a-22 a-23 a-28 a-30 a-33",
    "a-34 a-35 a-36 a-37 a-38 a-41 a-42 a-45 a-48 a-51",
    "a-55 b-3 b-8 b-20 b-35 b-41 b-52 b-55 b-59 v-55",
    "v-35 v-52 v-55b v-59 c-density-unit c-conditional-count c-coarse-box-fluctuation c-zero-drift-kinetic c-density-value c-speed-rescale",
    "c-velocity-three-densities c-isotropic-rotation c-pressure-mixture-carriers c-kinetic-velocity-limit c-collision-cross-section-model c-incident-molecular-flux-angle c-hydrostatic-isothermal-mixture c-air-molecular-vibration d-68 d-179",
    "d-295 p-52 p-54 p-59 p-71 p-73 p-86 p-91 p-92 p-99",
    "p-100 p-119 p-121 p-172 p-184 p-187 p-190 p-194 p-195 p-196",
    "p-198 p-199 p-204 p-212 p-217 p-232 p-235 p-245 p-246 p-247",
    "p-248 p-251 p-252 p-254 p-255 p-257 p-261 p-268 p-269 p-277",
    "p-282 p-283 p-293 p-299 p-303 p-318 p-322 p-345 p-347 p-348",
    "p-349 t-without-replacement-1 t-random-walk-origin-1 t-power-density-1 t-mean-free-path-1 t-rms-temperature-1 t-kinetic-pressure-1 t-collision-frequency-1 t-maxwell-temperature-ratio-1 t-barometric-ratio-1",
    "t-two-level-population-1 t-mixture-equipartition-1 t-maxwell-concepts-1 t-without-replacement-2 t-random-walk-origin-2 t-power-density-2 t-mean-free-path-2 t-rms-temperature-2 t-kinetic-pressure-2 t-collision-frequency-2",
    "t-maxwell-temperature-ratio-2 t-barometric-ratio-2 t-two-level-population-2 t-mixture-equipartition-2 t-maxwell-concepts-2 t-without-replacement-3 t-random-walk-origin-3 t-power-density-3 t-mean-free-path-3 t-rms-temperature-3",
    "t-kinetic-pressure-3 t-collision-frequency-3 t-maxwell-temperature-ratio-3 t-barometric-ratio-3 t-two-level-population-3 t-mixture-equipartition-3 t-maxwell-concepts-3 t-without-replacement-4 t-random-walk-origin-4 t-power-density-4",
    "t-mean-free-path-4 t-rms-temperature-4 t-kinetic-pressure-4 t-collision-frequency-4 t-maxwell-temperature-ratio-4 t-barometric-ratio-4 t-two-level-population-4 t-mixture-equipartition-4 t-maxwell-concepts-4 t-without-replacement-5",
    "t-random-walk-origin-5 t-power-density-5 t-mean-free-path-5 t-rms-temperature-5 t-kinetic-pressure-5 t-collision-frequency-5 t-maxwell-temperature-ratio-5 t-barometric-ratio-5 t-two-level-population-5 t-mixture-equipartition-5",
    "t-maxwell-concepts-5 t-without-replacement-6 t-random-walk-origin-6 t-power-density-6 t-mean-free-path-6 t-rms-temperature-6 t-kinetic-pressure-6 t-collision-frequency-6 t-maxwell-temperature-ratio-6 t-barometric-ratio-6",
    "t-two-level-population-6 t-mixture-equipartition-6 t-maxwell-concepts-6 u-effusion-mixture-1 u-wall-hit-count-1 u-free-path-survival-1 u-single-molecule-wall-force-1 u-uniform-rms-1 u-degenerate-level-1 u-barometric-height-from-density-1",
    "u-unequal-volume-occupancy-1 u-effusion-mixture-2 u-wall-hit-count-2 u-free-path-survival-2 u-single-molecule-wall-force-2 u-uniform-rms-2 u-degenerate-level-2 u-barometric-height-from-density-2 u-unequal-volume-occupancy-2 u-effusion-mixture-3",
    "u-wall-hit-count-3 u-free-path-survival-3 u-single-molecule-wall-force-3 u-uniform-rms-3 u-degenerate-level-3 u-barometric-height-from-density-3 u-unequal-volume-occupancy-3 u-effusion-mixture-4 u-wall-hit-count-4 u-free-path-survival-4",
    "u-single-molecule-wall-force-4 u-uniform-rms-4 u-degenerate-level-4 u-barometric-height-from-density-4 u-unequal-volume-occupancy-4 u-effusion-mixture-5 u-wall-hit-count-5 u-free-path-survival-5 u-single-molecule-wall-force-5 u-uniform-rms-5",
    "u-degenerate-level-5 u-barometric-height-from-density-5 u-unequal-volume-occupancy-5"
  ],
  "real-gas": [
    "a-31 a-47 a-49 a-54 b-7 b-26 b-46 v-26 c-compressibility-factor c-same-temperature-real-gas",
    "c-critical-coexistence-difference c-gas-adiabatic-expansion-real p-66 p-90 p-98 p-111 p-122 p-123 p-124 p-132",
    "p-336 t-van-der-waals-pressure-1 t-van-der-waals-pressure-2 t-van-der-waals-pressure-3 t-van-der-waals-pressure-4 t-van-der-waals-pressure-5 t-van-der-waals-pressure-6 u-vdw-isothermal-energy-1 u-vdw-critical-temperature-1 u-compressibility-factor-1",
    "u-vdw-isothermal-energy-2 u-vdw-critical-temperature-2 u-compressibility-factor-2 u-vdw-isothermal-energy-3 u-vdw-critical-temperature-3 u-compressibility-factor-3 u-vdw-isothermal-energy-4 u-vdw-critical-temperature-4 u-compressibility-factor-4 u-vdw-isothermal-energy-5",
    "u-vdw-critical-temperature-5 u-compressibility-factor-5"
  ],
  "first-law": [
    "a-9 a-12 a-17 a-39 a-40 a-43 a-50 a-59 b-5 b-13",
    "b-17 b-28 b-33 b-37 b-38 b-39 b-44 b-50 b-53 v-39",
    "v-37 b-40 b-58 c-constant-external-work c-rigid-paddle c-fixed-pressure-enthalpy c-piston-endpoint-heat c-positive-q-negative-dt c-heater-system-boundary c-same-nu-heat-capacity",
    "c-thermometer-finite-capacity c-calorimeter-bias c-adiabatic-isothermal-tangents c-unequal-pressures-insulated-contact d-177 d-296 p-10 p-13 p-35 p-39",
    "p-49 p-53 p-65 p-67 p-70 p-72 p-75 p-76 p-77 p-80",
    "p-93 p-95 p-96 p-101 p-105 p-108 p-110 p-113 p-115 p-120",
    "p-126 p-129 p-130 p-133 p-134 p-135 p-136 p-137 p-138 p-139",
    "p-141 p-142 p-143 p-144 p-145 p-146 p-147 p-148 p-161 p-165",
    "p-169 p-170 p-173 p-181 p-183 p-185 p-186 p-192 p-207 p-234",
    "p-244 p-253 p-264 p-265 p-266 p-271 p-274 p-279 p-289 p-298",
    "p-306 p-307 p-308 p-310 p-314 p-315 p-317 p-324 p-325 p-326",
    "p-329 p-340 p-342 p-344 p-351 p-353 p-357 p-395 p-446 t-isobaric-work-1",
    "t-isochoric-heating-1 t-isothermal-work-1 t-adiabatic-expansion-temperature-1 t-adiabatic-compression-work-1 t-linear-path-work-1 t-rectangular-cycle-1 t-isobaric-monatomic-budget-1 t-two-stage-heating-expansion-1 t-polytropic-work-1 t-compression-energy-balance-1",
    "t-isobaric-work-2 t-isochoric-heating-2 t-isothermal-work-2 t-adiabatic-expansion-temperature-2 t-adiabatic-compression-work-2 t-linear-path-work-2 t-rectangular-cycle-2 t-isobaric-monatomic-budget-2 t-two-stage-heating-expansion-2 t-polytropic-work-2",
    "t-compression-energy-balance-2 t-isobaric-work-3 t-isochoric-heating-3 t-isothermal-work-3 t-adiabatic-expansion-temperature-3 t-adiabatic-compression-work-3 t-linear-path-work-3 t-rectangular-cycle-3 t-isobaric-monatomic-budget-3 t-two-stage-heating-expansion-3",
    "t-polytropic-work-3 t-compression-energy-balance-3 t-isobaric-work-4 t-isochoric-heating-4 t-isothermal-work-4 t-adiabatic-expansion-temperature-4 t-adiabatic-compression-work-4 t-linear-path-work-4 t-rectangular-cycle-4 t-isobaric-monatomic-budget-4",
    "t-two-stage-heating-expansion-4 t-polytropic-work-4 t-compression-energy-balance-4 t-isobaric-work-5 t-isochoric-heating-5 t-isothermal-work-5 t-adiabatic-expansion-temperature-5 t-adiabatic-compression-work-5 t-linear-path-work-5 t-rectangular-cycle-5",
    "t-isobaric-monatomic-budget-5 t-two-stage-heating-expansion-5 t-polytropic-work-5 t-compression-energy-balance-5 t-isobaric-work-6 t-isochoric-heating-6 t-isothermal-work-6 t-adiabatic-expansion-temperature-6 t-adiabatic-compression-work-6 t-linear-path-work-6",
    "t-rectangular-cycle-6 t-isobaric-monatomic-budget-6 t-two-stage-heating-expansion-6 t-polytropic-work-6 t-compression-energy-balance-6 u-mixing-different-heat-capacities-1 u-polytropic-molar-heat-1 u-external-pressure-adiabat-1 u-path-heat-difference-1 u-calorimetry-specific-heat-1",
    "u-mixture-specific-heat-difference-1 u-mixing-different-heat-capacities-2 u-polytropic-molar-heat-2 u-external-pressure-adiabat-2 u-path-heat-difference-2 u-calorimetry-specific-heat-2 u-mixture-specific-heat-difference-2 u-mixing-different-heat-capacities-3 u-polytropic-molar-heat-3 u-external-pressure-adiabat-3",
    "u-path-heat-difference-3 u-calorimetry-specific-heat-3 u-mixture-specific-heat-difference-3 u-mixing-different-heat-capacities-4 u-polytropic-molar-heat-4 u-external-pressure-adiabat-4 u-path-heat-difference-4 u-calorimetry-specific-heat-4 u-mixture-specific-heat-difference-4 u-mixing-different-heat-capacities-5",
    "u-polytropic-molar-heat-5 u-external-pressure-adiabat-5 u-path-heat-difference-5 u-calorimetry-specific-heat-5 u-mixture-specific-heat-difference-5"
  ],
  "second-law": [
    "a-3 a-8 a-14 a-21 a-24 a-56 a-57 a-60 a-61 b-1",
    "b-2 b-9 b-21 b-23 b-27 b-30 b-32 b-49 b-54 b-57",
    "v-1 v-33 v-27 v-43 v-57 v-54 b-60 c-adiabatic-not-isentropic c-engine-powers-reverse-machine c-isolated-subsystem-entropy",
    "c-reversible-cycle-entropy c-carnot-temperature-scale c-refrigeration-energy-boundary c-carnot-identical-ratio c-direction-finite-thermal-contact c-single-reservoir-cycle c-work-reservoir-entropy c-accessible-count-entropy c-quasistatic-friction c-passive-heat-engine-room",
    "d-262 p-15 p-18 p-25 p-69 p-74 p-87 p-103 p-116 p-117",
    "p-118 p-125 p-131 p-149 p-151 p-152 p-153 p-154 p-155 p-156",
    "p-157 p-158 p-163 p-180 p-182 p-191 p-201 p-219 p-263 p-301",
    "p-311 p-319 p-320 p-321 p-323 p-327 p-328 p-330 p-341 p-343",
    "p-354 p-355 p-386 p-412 t-carnot-absorbed-heat-1 t-carnot-heat-balance-1 t-carnot-refrigerator-1 t-reservoir-transfer-entropy-1 t-insulated-free-expansion-1 t-finite-bodies-entropy-1",
    "t-ideal-mixture-entropy-1 t-entropy-temperature-volume-1 t-carnot-absorbed-heat-2 t-carnot-heat-balance-2 t-carnot-refrigerator-2 t-reservoir-transfer-entropy-2 t-insulated-free-expansion-2 t-finite-bodies-entropy-2 t-ideal-mixture-entropy-2 t-entropy-temperature-volume-2",
    "t-carnot-absorbed-heat-3 t-carnot-heat-balance-3 t-carnot-refrigerator-3 t-reservoir-transfer-entropy-3 t-insulated-free-expansion-3 t-finite-bodies-entropy-3 t-ideal-mixture-entropy-3 t-entropy-temperature-volume-3 t-carnot-absorbed-heat-4 t-carnot-heat-balance-4",
    "t-carnot-refrigerator-4 t-reservoir-transfer-entropy-4 t-insulated-free-expansion-4 t-finite-bodies-entropy-4 t-ideal-mixture-entropy-4 t-entropy-temperature-volume-4 t-carnot-absorbed-heat-5 t-carnot-heat-balance-5 t-carnot-refrigerator-5 t-reservoir-transfer-entropy-5",
    "t-insulated-free-expansion-5 t-finite-bodies-entropy-5 t-ideal-mixture-entropy-5 t-entropy-temperature-volume-5 t-carnot-absorbed-heat-6 t-carnot-heat-balance-6 t-carnot-refrigerator-6 t-reservoir-transfer-entropy-6 t-insulated-free-expansion-6 t-finite-bodies-entropy-6",
    "t-ideal-mixture-entropy-6 t-entropy-temperature-volume-6 u-entropy-variable-cv-1 u-finite-cooling-work-1 u-finite-reversible-equilibrium-1 u-heat-pump-cycle-count-1 u-cascade-second-engine-work-1 u-rectangular-cycle-efficiency-1 u-bath-entropy-isothermal-compression-1 u-piston-isothermal-entropy-generation-1",
    "u-entropy-variable-cv-2 u-finite-cooling-work-2 u-finite-reversible-equilibrium-2 u-heat-pump-cycle-count-2 u-cascade-second-engine-work-2 u-rectangular-cycle-efficiency-2 u-bath-entropy-isothermal-compression-2 u-piston-isothermal-entropy-generation-2 u-entropy-variable-cv-3 u-finite-cooling-work-3",
    "u-finite-reversible-equilibrium-3 u-heat-pump-cycle-count-3 u-cascade-second-engine-work-3 u-rectangular-cycle-efficiency-3 u-bath-entropy-isothermal-compression-3 u-piston-isothermal-entropy-generation-3 u-entropy-variable-cv-4 u-finite-cooling-work-4 u-finite-reversible-equilibrium-4 u-heat-pump-cycle-count-4",
    "u-cascade-second-engine-work-4 u-rectangular-cycle-efficiency-4 u-bath-entropy-isothermal-compression-4 u-piston-isothermal-entropy-generation-4 u-entropy-variable-cv-5 u-finite-cooling-work-5 u-finite-reversible-equilibrium-5 u-heat-pump-cycle-count-5 u-cascade-second-engine-work-5 u-rectangular-cycle-efficiency-5",
    "u-bath-entropy-isothermal-compression-5 u-piston-isothermal-entropy-generation-5"
  ],
  "transport": [
    "a-2 a-7 a-10 a-16 a-19 a-25 a-27 a-52 b-15 b-18",
    "b-47 v-22 v-47 v-15 c-transport-signs c-steady-not-equilibrium c-diffusion-dimensional-time c-viscosity-momentum c-unit-transport-pairs c-gas-mean-path-dilute-eta",
    "c-radiation-equal-temperature c-conduction-fixed-material-volume p-27 p-316 t-steady-conduction-1 t-series-conduction-1 t-couette-shear-1 t-fick-steady-flow-1 t-steady-conduction-2 t-series-conduction-2",
    "t-couette-shear-2 t-fick-steady-flow-2 t-steady-conduction-3 t-series-conduction-3 t-couette-shear-3 t-fick-steady-flow-3 t-steady-conduction-4 t-series-conduction-4 t-couette-shear-4 t-fick-steady-flow-4",
    "t-steady-conduction-5 t-series-conduction-5 t-couette-shear-5 t-fick-steady-flow-5 t-steady-conduction-6 t-series-conduction-6 t-couette-shear-6 t-fick-steady-flow-6 u-wall-interface-temperature-1 u-parallel-wall-path-1",
    "u-cylindrical-conduction-1 u-diffusion-number-density-change-1 u-wall-interface-temperature-2 u-parallel-wall-path-2 u-cylindrical-conduction-2 u-diffusion-number-density-change-2 u-wall-interface-temperature-3 u-parallel-wall-path-3 u-cylindrical-conduction-3 u-diffusion-number-density-change-3",
    "u-wall-interface-temperature-4 u-parallel-wall-path-4 u-cylindrical-conduction-4 u-diffusion-number-density-change-4 u-wall-interface-temperature-5 u-parallel-wall-path-5 u-cylindrical-conduction-5 u-diffusion-number-density-change-5"
  ],
  "interfaces": [
    "b-24 v-24 c-surface-unit-work c-same-radius-drop-bubble c-contact-angle-side c-wetting-contact-balances c-plate-film-translation c-drop-splitting-area c-inclined-capillary-length c-curvature-flat-interface",
    "c-capillary-radius-inverse c-floating-contact-line t-curved-interfaces-1 t-capillary-rise-1 t-curved-interfaces-2 t-capillary-rise-2 t-curved-interfaces-3 t-capillary-rise-3 t-curved-interfaces-4 t-capillary-rise-4",
    "t-curved-interfaces-5 t-capillary-rise-5 t-curved-interfaces-6 t-capillary-rise-6 u-soap-bubble-surface-work-1 u-soap-bubble-surface-work-2 u-soap-bubble-surface-work-3 u-soap-bubble-surface-work-4 u-soap-bubble-surface-work-5"
  ],
  "phases": [
    "c-sat-compress-equilibrium c-partial-saturation-carrier c-constant-absolute-humidity c-dew-first-condensation c-boil-evaporate c-sealed-water-cool-volume c-clapeyron-negative c-triple-point-variable c-latent-plateau-process c-ice-water-equilibrium-perturbation",
    "c-melting-room-snow t-heating-partial-vaporization-1 t-reversible-melting-entropy-1 t-clapeyron-slope-1 t-heating-partial-vaporization-2 t-reversible-melting-entropy-2 t-clapeyron-slope-2 t-heating-partial-vaporization-3 t-reversible-melting-entropy-3 t-clapeyron-slope-3",
    "t-heating-partial-vaporization-4 t-reversible-melting-entropy-4 t-clapeyron-slope-4 t-heating-partial-vaporization-5 t-reversible-melting-entropy-5 t-clapeyron-slope-5 t-heating-partial-vaporization-6 t-reversible-melting-entropy-6 t-clapeyron-slope-6 u-ice-water-melting-budget-1",
    "u-saturated-headspace-1 u-vapour-pressure-two-temperatures-1 u-pressure-melting-shift-1 u-ice-water-melting-budget-2 u-saturated-headspace-2 u-vapour-pressure-two-temperatures-2 u-pressure-melting-shift-2 u-ice-water-melting-budget-3 u-saturated-headspace-3 u-vapour-pressure-two-temperatures-3",
    "u-pressure-melting-shift-3 u-ice-water-melting-budget-4 u-saturated-headspace-4 u-vapour-pressure-two-temperatures-4 u-pressure-melting-shift-4 u-ice-water-melting-budget-5 u-saturated-headspace-5 u-vapour-pressure-two-temperatures-5 u-pressure-melting-shift-5"
  ]
})) {
  for (const id of rows.join(" ").split(" ")) window.HEAT_TOPIC_BY_ID[id] = topic;
}
for (const question of window.HEAT_BANK) {
  if (question.topic) window.HEAT_TOPIC_BY_ID[question.id] = question.topic;
}
