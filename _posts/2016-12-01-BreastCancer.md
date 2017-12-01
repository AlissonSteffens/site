---
layout: post
title:  "Breast Cancer Detection"
date:   2017-10-27 00:00:00 -0200
categories:
  - Health
tags:
  - Breast Cancer
  - Computer-Aided Detection
  - Support Vector Machine
---

*These researches are about helping doctor in the improvement of breast cancer detection to make it faster and more precise using Artificial Intelligence and Computer Vision.*

## Papers

* **(2016) Analysis of sensitivity of an Hough Transformation Algorithm in the Mammography Segmentation**
[Paper Pt-Br - Monograph](https://drive.google.com/open?id=0BwyKFa3moh3WeW4tV05WVDBVaTA)
*Authors: André L. M. Santana (advisor) and Maurício Sonza(advised)*

![](https://i.imgur.com/JbzGPWH.png)

> Cancer is a disease that has an uncontrolled cells growth. On  tissues it can invade nearby regions, when it occurs in the breast area, it is called breast cancer. It is the second type of cancer that occurs the most in the world and the second that kill most women. The best solution to reduce the breast cancer mortality is the earlier detection. The most common screening exam is the mammography. But analyze that disease it’s considered a difficult task even for the most experienced radiologists to identify the disease due to its similarity to the rest of the image. Computer aided detection system has been assisting the specialists in the decision-making, but those systems also have problems to distinguish the anomalies correctly. This paper conducted a literature review, identifying other studies in this area that have been published in the last 10 years. The main focus in this research is to analyze the behavior of a Hough Transformation Algorithm, targeting the pectoral muscle in mammograms. The methodology used was built based on similar studies and adapted to the images used in this research scope. MIAS database was chosen as a public repository and provides only mediolateral oblique projections. All 322 images were processed by changing variables that improve the enhancement of the image contrast, edge detection and line detection. Also, a new methodology has been applied, identifying the line of the pectoral muscle by farthest straight line identification with the opposite direction of the same, obtaining as best results: 43% of images classified as 'Good' (clear and able to reduce all the noise) 16% 'Acceptable' (minimum of problems which can be removed), 4% Unacceptable' (unable to use because it cuts a lot of important regions)  and 37% 'Discarded' (not segmented).

* **(2015) Detection of masses in mammogram images using Support Vector Machine**
[Paper Pt-Br - Monograph](https://drive.google.com/open?id=0BwyKFa3moh3Wc2dJTk9Lckp3NWs)
*Authors: André L. M. Santana and Anelise Deitos Junkes (advised)*

![](https://i.imgur.com/NI7ZpaY.png)

>Breast cancer is the second most common cancer incidence in the world, exceeded only by lung cancer. The World Health Organization considers it to be of easier to heal as long as it is diagnosed and treated during the first stages. Its early detection, by screening exams, is an important factor in the reduction of deaths. The most commonly used exam to that end is mammography, but the similarities between the early signs of cancer and normal breast structures in these images make the detection a hard task, even for experienced radiologists. To help the specialists, many computer-aided detection systems have been proposed in the last thirty years. This paper was conducted by a systematic literature review of the papers developed in the last five years all over the world, with focus on the machine learning techniques used to classify the tissues (between normal and potentially cancerous), and has as primary objective the implementation of an algorithm for detecting masses in mammographies based on the most recurrent techniques among those selected, with the utilization of the Support Vector Machines (SVM) classifier. The implemented solution, divided in four stages (preprocessing, segmentation of regions of interest, extraction of characteristics and classification), is used to remove the mammography background, a simple thresholding technique, with the segmentation of the breast area being realized by a region growing algorithm. For MLO (Mediolateral Oblique)  mammograms, the segmentation of the pectoral muscle was done through the detection of borders by the Canny filter and the detection of straight lines by the Hough Transform. The regions of interest were separated by Cellular Neural Networks, with the Textudil template, and classified through a Gaussian kernel SVM, using the texture characteristics extracted through Ripley's K Function and Moran's and Geary's Indexes as an input. The best results obtained by the classifier at the end of the test phase were: 77.7% of sensibility, 72.3% of specificity, 74.4% of accuracy and area under the ROC curve of 0.75. There were 0.157 false negatives per image, and there was a reduction in the number of false positives per image from 0.84 to 0.292.

## Extra Information

[Project 2 - GitHub](https://github.com/UNIVALI-LITE-CV/BreastCancerDetection)