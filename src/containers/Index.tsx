import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: .6rem;
  align-items: center;
  justify-items: center;
  margin-top: 1rem;
`;

const Canvas = styled.canvas`
  display: none;
  visibility: hidden;
`;

const Video = styled.video`
  border: 2px solid black;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const Img = styled.img`
  border: 2px solid black;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

const Button = styled.button`
  border: 2px solid black;
  min-width: 75%;
  font-size: 1rem;
`;

const Index: React.FC<RouteComponentProps> = () => {
  let video: HTMLVideoElement | null;
  let canvas: HTMLCanvasElement | null;
  let img: HTMLImageElement | null;
  const handleSuccess = (stream: MediaStream) => {
    if (video) {
      video.srcObject = stream;
    }
  }
  const handleError = (error: any) => {
    console.error('Error: ', error);
  }
  const captureVideoClick = () => {
    navigator.mediaDevices.getUserMedia({
      video: { width: { exact: 400 }, height: { exact: 400 } },
    }).then(handleSuccess).catch(handleError)
  }

  const screenshotClick = () => {
    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const twoD = canvas.getContext('2d')
      if (twoD) twoD.drawImage(video, 0, 0)
      if (img) img.src = canvas.toDataURL('image/jpeg');
    }
  }
  return (
    <Wrapper>
      <Video autoPlay playsinline={true} ref={node => video = node}></Video>
      <Img ref={node => img = node} />
      <Canvas ref={node => canvas = node} />
      <ButtonWrapper>
        <Button onClick={captureVideoClick}>Start</Button>
        <Button onClick={screenshotClick}>Screenshot</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Index;
