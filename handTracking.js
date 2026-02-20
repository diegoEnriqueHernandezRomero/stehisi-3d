import {
  HandLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/vision_bundle.mjs";

export const hand = { x: 0, y: 0, active: false };

export async function initHandTracking() {
  const video = document.getElementById("video");

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  await video.play();

  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );

  const landmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm/hand_landmarker.task"
    },
    runningMode: "VIDEO",
    numHands: 1
  });

  async function loop() {
    const res = landmarker.detectForVideo(video, performance.now());

    if (res.landmarks?.length) {
      const p = res.landmarks[0][8];
      hand.x = (p.x - 0.5) * 8;
      hand.y = (0.5 - p.y) * 6;
      hand.active = true;
    } else {
      hand.active = false;
    }

    requestAnimationFrame(loop);
  }

  loop();
}