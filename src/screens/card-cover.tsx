import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './card-content.css'

import img_button_back from '../assets/img_button_back.svg'
import bg_card_cover from '../assets/bg_card_cover.png'
import img_main_card_cover from '../assets/bg_card_cover_222.png'
import title_center_card_cover from '../assets/title_center_card_cover.png'
import img_kiss_card_cover from '../assets/img_kiss_card_cover.png'
import img_heart_card_cover from '../assets/img_heart_card_cover.png'
import title_invite_card_cover from '../assets/kinh_moi.png'

import img_button_next from '../assets/img_button_next.svg'

function CardCover() {
    const navigation = useNavigate()
    const routeParams = useParams()

    const _onClickButtonNext = () => {
        navigation(
            `/card-content/${routeParams.name}/${routeParams.type || ''}`
        )
    }

    const _onClickButtonBack = () => {
        navigation(-1)
    }

    return (
        <div className="App"
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                left: -200,
               
            }}

        >
            <div
                style={{
                    backgroundImage: `url(${bg_card_cover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // overflow: 'hidden',
                    width: '500px',
                    maxWidth: "520px",
                    position: 'absolute',
                }}
            >
                {/* Button back */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: -10,
                        zIndex: 2,
                    }}
                >
                    <img
                        src={img_button_back}
                        onClick={_onClickButtonBack}
                        alt=""
                        style={{
                            width: '150px',
                            height: '200px',
                            zIndex: 1,
                            marginTop: '-60px',
                            
                        }}
                    />
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${img_main_card_cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                    }}
                >
                    
                </div>
                <div
                    style={{
                        // backgroundImage: `url(${img_main_card_cover})`,
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPositionY: '-30px',
                        // backgroundPositionX: 'center',
                        // backgroundSize: 'contain',
                        width: '100%',
                        height: 'auto',
                        position: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <div
                        style={{
                            backgroundImage: `url(${title_center_card_cover})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '100px',
                            marginTop: '27vh',
                        }}
                    /> */}


                    <div
                        style={{
                            position: 'fixed',
                            marginTop: '-90px',
                            display: 'flex',
                            flexDirection: 'column',
                            //alignItems: 'center',
                            //justifyContent: 'center',
                        }}
                    >
                        <img
                            src={img_kiss_card_cover}
                            alt=""
                            style={{
                                width: '290px',
                                height: '280px',
                                zIndex: 1,
                                marginTop: '8px',
                                display: 'none',
                            }}
                        />
                        <img
                            src={img_heart_card_cover}
                            alt=""
                            style={{
                                width: '93px',
                                height: '93px',
                                zIndex: 2,
                                position: 'absolute',
                                marginRight: '30px',
                                marginTop: '70px',
                                display: 'none',
                            }}
                        />
                    </div>

                    <img
                        src={title_invite_card_cover}
                        alt=""
                        style={{
                            width: '160px',
                            height: '40px',
                            marginTop: '530px',
                            marginLeft: '30px',
                            display: 'none'
                        }}
                    />

                   
                </div>

                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        //justifyContent: 'flex-end',
                        top: 400,
                        left: 50,
                        right: 0,
                        bottom: 0,
                        marginTop: '7vh',
                        zIndex: 4,
                    }}
                >
                    <img
                        src={title_invite_card_cover}
                        alt=""
                        style={{
                            width: '160px',
                            height: '40px',
                            marginTop: '20px',
                            marginLeft: '200px',
                            //display: 'none'
                        }}
                    />
                    
                    <p
                        style={{
                            fontFamily: 'cursive',
                            fontSize: '24px',
                            color: 'pink',
                            textAlign: 'center',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dotted',
                            textUnderlineOffset: '12px',
                            marginLeft: '-120px',
                            marginTop: '60px',
                        }}
                    >

                        {routeParams.name}
                    </p>
                </div>
                <div
                    style={{
                        //position: 'absolute',
                        //top: 600,
                        //right: 10,

                        position: 'absolute',
                        top: 520,
                        //bottom:-700,
                        right: 20,
                       
                        //display: 'flex',
                        //justifyContent: 'flex-end',
                        //width: '15vw',
                        //height: '15vh',
                        //backgroundColor: '#FCEDEA',
                    }}
                >
                    <img
                        src={img_button_next}
                        onClick={_onClickButtonNext}
                        alt=""
                        style={{
                            width: '150px',
                            height: '200px',
                            zIndex: 5,
                            //marginTop: '-60px',

                        }}
                       
                    />
                </div>
            </div>
        </div>
    )
}

export default CardCover
