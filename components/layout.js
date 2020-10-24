import React , { useState } from "react"
import Head from "next/head"
import { useDispatch , useSelector } from "react-redux"
import {Container , Grid , LinearProgress} from "@material-ui/core"
import { create } from 'jss';
import {StylesProvider , jssPreset , createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import rtl from 'jss-rtl';
import {useTransition, animated} from 'react-spring'
// Conponents
import Header from "./main/header/header"
import Footer from "./main/footer/index"

const theme = createMuiTheme({
    direction: 'rtl',
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



const Layout = ({children}) => {

    const {pageLoading} = useSelector(state => state.Detail)
    const [show, set] = useState(true)
    const transitions = useTransition(show, null, {
        from: { transform: 'translate3d(0,40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,40px,0)' },
    })


    return (
        <React.Fragment>
            <Head>
                <title>Page Main</title>
            </Head>
            <StylesProvider jss={jss}>
                <ThemeProvider theme={theme}>
                    {
                        pageLoading === true && (
                            <div className="lineProgress">
                                <LinearProgress />
                            </div>
                        )
                    }
                    <div className="container-main" dir="rtl">
                        <Container className="container" maxWidth="lg">
                            <Header />
                            {
                                transitions.map( ({ item, key, props }) => {
                                    if(item) {
                                        return (
                                            <animated.div key={key} style={props}>
                                                <main className="main">{children}</main>
                                            </animated.div>
                                        )
                                    }
                                })
                            }
                            <Footer />
                        </Container>
                    </div>
                </ThemeProvider>
            </StylesProvider>
            
            <style jsx global>{`
                body {
                    background-color : #F9F9F9
                }
                .lineProgress{
                    width: 100%;
                    position: fixed;
                    top: 0;
                    z-index: 50;
                }
                .container {
                    margin-top : 50px;
                }

                .main{
                    margin-top : 25px;
                }
            `}</style>

        </React.Fragment>
    )
}

export default Layout;