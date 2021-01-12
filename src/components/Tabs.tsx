import { Spin, Steps } from "antd";
import React, { FC, useEffect, useState } from "react";
import { LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { FINAL_STEP, getRandomArrayElement, GIF_DURATION_IN_MS } from "../utils";
import ImageAndButton from "./ImageAndButton";


interface ICustomTabsProps {
    config: IConfig
}

const CustomTabs: FC<ICustomTabsProps> = ({ config }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [randomConfig, setRandomConfig] = useState<any>()
    const { image } = config
    const { Step } = Steps;

    useEffect(() => {
        if (currentStep === FINAL_STEP) {
            const randomAttributeColor = getRandomArrayElement(config.attributes)
            const splitString = config.image.split('/')
            splitString[splitString.length - 1] = `${randomAttributeColor}.png`
            const randomImage = splitString.join('/')
            setRandomConfig({
                color: randomAttributeColor,
                image: randomImage,
                cable_configuration: getRandomArrayElement(config.cable_configuration),
            })
        }
    }, [currentStep])

    const handleSurpriseMe = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setCurrentStep((prevState => prevState + 1))
        }, GIF_DURATION_IN_MS)
    }

    const handleSelectFinal = () => {
        window.parent.postMessage({ selectedAttributes: randomConfig }, '*');
    }

    const renderContentBySteps = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageAndButton
                            buttonText='Surprise me'
                            handleButtonCallback={handleSurpriseMe}
                            imageSrc={image}
                        />
                    </div>
                )
            case 1:
                return (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div>{randomConfig?.cable_configuration}</div>
                        <ImageAndButton
                            buttonText='Select me'
                            handleButtonCallback={handleSelectFinal}
                            imageSrc={randomConfig?.image ?? ''}
                        />
                    </div>
                )
        }
    }

    const renderLoading = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Spin style={{ margin: 16 }} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin/>}
                  tip="Randomising your choice..."/>
            <img style={{ margin: 16 }} width={350}
                 src={'https://media.tenor.com/images/ae7af48fa2d48615c9fe15d88eef2047/tenor.gif'}/>
        </div>
    )

    return (
        <div>
            <Steps style={{ padding: 50 }} current={currentStep}>
                <Step title="Surprise me"/>
                <Step title="Done" icon={<SmileOutlined/>}/>
            </Steps>
            {!loading ? renderContentBySteps() : renderLoading()}
        </div>
    )
}

export default CustomTabs