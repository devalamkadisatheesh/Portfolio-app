import cv2
import numpy as np

# Load images
image1 = cv2.imread('C\\Users\dell\OneDrive\Pictures\passphoto.jpeg', cv2.IMREAD_GRAYSCALE)
image2 = cv2.imread('C\\Users\dell\OneDrive\Pictures\passphoto.jpeg', cv2.IMREAD_GRAYSCALE)

# Initialize SIFT detector
sift = cv2.SIFT_create()

# Find keypoints and descriptors
keypoints1, descriptors1 = sift.detectAndCompute(image1, None)
keypoints2, descriptors2 = sift.detectAndCompute(image2, None)

# Initialize Brute-Force matcher
bf = cv2.BFMatcher()

# Match descriptors
matches = bf.knnMatch(descriptors1, descriptors2, k=2)

# Apply ratio test
good_matches = []
for m, n in matches:
    if m.distance < 0.75 * n.distance:
        good_matches.append(m)

# Draw matches
match_img = cv2.drawMatches(image1, keypoints1, image2, keypoints2, good_matches, None, flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS)

# Display result
cv2.imshow('Matches', match_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
