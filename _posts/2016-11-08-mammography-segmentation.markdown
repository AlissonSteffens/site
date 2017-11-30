---
layout: post
title:  "Analysis of sensitivity of an Hough Transformation Algorithm in the Mammography Segmentation"
date:   2016-11-08 22:40:27 -0200
categories:
  - Computer & Health
tags:
  - BreastCancer
  - ComputerAidedDetectio
  - PectoralMuscleSegmentation
---

Cancer is a disease that has an uncontrolled cells growth. On  tissues it can invade nearby regions, when it occurs in the breast area, it is called breast cancer. It is the second type of cancer that occurs the most in the world and the second that kill most women. The best solution to reduce the breast cancer mortality is the earlier detection. The most common screening exam is the mammography. But analyze that disease it’s considered a difficult task even for the most experienced radiologists to identify the disease due to its similarity to the rest of the image. Computer aided detection system has been assisting the specialists in the decision-making, but those systems also have problems to distinguish the anomalies correctly. This paper conducted a literature review, identifying other studies in this area that have been published in the last 10 years. The main focus in this research is to analyze the behavior of a Hough Transformation Algorithm, targeting the pectoral muscle in mammograms. The methodology used was built based on similar studies and adapted to the images used in this research scope. MIAS database was chosen as a public repository and provides only mediolateral oblique projections. All 322 images were processed by changing variables that improve the enhancement of the image contrast, edge detection and line detection. Also, a new methodology has been applied, identifying the line of the pectoral muscle by farthest straight line identification with the opposite direction of the same, obtaining as best results: 43% of images classified as 'Good' (clear and able to reduce all the noise) 16% 'Acceptable' (minimum of problems which can be removed), 4% Unacceptable' (unable to use because it cuts a lot of important regions)  and 37% 'Discarded' (not segmented).

