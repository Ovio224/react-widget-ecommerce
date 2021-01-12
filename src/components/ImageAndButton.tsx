import React, { FC } from 'react';
import { Button, Image } from "antd";

interface ImageAndButtonProps {
    handleButtonCallback: () => void
    buttonText: string
    imageSrc: string
}

const ImageAndButton: FC<ImageAndButtonProps> = ({
                                                     handleButtonCallback,
                                                     buttonText,
                                                     imageSrc
                                                 }) => (
    <React.Fragment>
        <Image
            width={350}
            src={imageSrc}
        />
        <Button style={{ marginLeft: 50 }} onClick={handleButtonCallback}>{buttonText}</Button>
    </React.Fragment>
)

export default ImageAndButton