<template>
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      path {
        animation: stroke 0.5s infinite;
      }
      @keyframes stroke {
        0% {
          filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
            brightness(90%) contrast(119%);
        }
        50% {
          filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
            brightness(70%) contrast(119%);
        }
        100% {
          filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
            brightness(90%) contrast(119%);
        }
      }
    </style>
    <path
      d="M0 10 L0 0 L30 0 L27 1 L1 1 L1 10 L 0 15"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M90 0 L100 0 L100 30 L99 25 L99 1 L85 1 L82 0 "
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M0 85 L0 100 L15 100 L10 99 L1 99 L1 85 L0 80"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M60 100 L100 100 L100 70 L99 78 L99 99 L68 99 L60 100 "
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M0 20 L0 60 L1 54 L1 38 L0 30 "
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M0 5 L0 95"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M100 5 L100 95"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M5 0 L95 0"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
    <path
      d="M5 100 L95 100"
      stroke-linecap="butt"
      stroke="#eee"
      stroke-width="1"
      stroke-dasharray="388"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style></style>
