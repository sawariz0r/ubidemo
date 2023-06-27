# Ubiquiti 3D demo

This project is a [React Three Fiber](https://github.com/pmndrs/react-three-fiber) project, built as a submission for the 3D Web Developer role.

## Introduction

The goal was to create an application that takes a 3D scene where you can place product models in the space using:

- Typescript
- React
- Three / R3F
- (R3F) Drei
- Zustand

## Features

The main features of the applications:

- See the space in 3D and navigate around with your mouse
- Adjust the lightning, model positions, etc using Leva.
- Place, (move) and remove product models.

Note: I took the freedom to implement a way to move/place that I felt was intuitive. I made Removing quite simple as well to save time. The usage is described in the top-left window of the application under "AP List".

## Prerequisites

You'll need to have **Yarn** installed, as well as Node.js on your system. I was using 18.11 at the time.

If you want to build and run the dockerized version of the application you need to have **Docker** and **docker-compose** installed as well. 

## Installation

Step by step guide on setting up the project locally.

```bash
# Clone the repository
git clone https://github.com/sawariz0r/ubidemo.git

# Navigate into the directory
cd ubidemo

# Install dependencies
yarn install

# Start the local server
yarn dev 
(opens in localhost:8000)
```

## My thoughts

Having spent hundreds of hours with R3F, this was a really fun and familiar test. And while I could have spent more time on it, I tried to keep it somewhat basic for the test.

With that said, I'd like to spend more time tinkering with the `ARKit/RoomPlan -> USDZ -> GLTF -> App`. And save some time building the Drag-to-place feature and instead showcase that in another project I've built, where it can rotate and snaps along the office plane when dragging.

Some struggles I had was with the wall collision raycasting, and getting the AP to rotate nicely and stick out from the wall. I approached it by first using a simple red box and setting up the raycast collision check, to make sure it hit and set the position of the cube to the intersection. I later replaced said box with the AP model (which I first converted from USDZ > GLB using blender, Three likes GLTF more) and had to work with rotating it to face out from the wall. I tried a couple of different approaches that kind of did what I wanted, until I landed with the one I have now. It's not perfect - but it works well with different angled walls (like the curved one). I would like to tweak it to make the U face upwards if I had more time.

I absolutely love working with R3F and Three - and would be happy to dive much deeper into it ✨
And as I mentioned - I'm happy to showcase the drag-parts in my virtual office app :)

## Going forward

Some things that could be built or fixed from here on:
- Make the U on the AP rotate upwards. 
- Setting up a converter that takes a scanned USDZ, converts it to GLTF for the app.
- More accurate "projected range" - perhaps to map the area. (And go from wireframe to a transparent circle, perhaps)
- Add the ability to upload models and use the said USDZ converter to GLTF/GLB, so you can add and use it in the app. Perhaps a simple model preview/code editor to set the scale/rotations right.
- Add some sort of performance monitoring to make sure it's not too heavy. I know Drei has this.

Setting up a scalable folder structure would also be a next top priority.

Among other things.