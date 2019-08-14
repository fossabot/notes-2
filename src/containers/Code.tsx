import React from 'react';
import Highlight from 'react-highlight';
import { RouteComponentProps } from '@reach/router';

const Code: React.FC<RouteComponentProps> = () => {
  return (
    <Highlight className="TypeScript">
      {`
      const Index: React.FC<RouteComponentProps> = () => {
        let video: HTMLVideoElement | null;
        let canvas: HTMLCanvasElement | null;
        let img: HTMLImageElement | null;

        const handleSuccess = (stream: MediaStream) => {
          if (video) video.srcObject = stream;
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
            <Video autoPlay playsinline ref={node => video = node} />
            <Img ref={node => img = node} />
            <Canvas ref={node => canvas = node} />
            <ButtonWrapper>
              <Button onClick={captureVideoClick}>Start</Button>
              <Button onClick={screenshotClick}>Screenshot</Button>
            </ButtonWrapper>
          </Wrapper>
        );
      }`}
    </Highlight>
  );
}

export default Code;
