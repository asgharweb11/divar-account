import { useState } from "react"
import {
    Typography,
    Card,
    CardActionArea
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ChartApex from "react-apexcharts"
// Components 
import { boxShadow } from "../styles/styles"
// Styles 
import style from "../../../styles/panelUser/dashboard.module.scss"
import {
    colorBlue
} from "../styles/styles"

const useStyles = makeStyles({
    cardArea : {
        padding : 15,
        background: "white",
        boxShadow,
        borderRadius: 10
    }
})


const Chart = () => {

    const classes = useStyles()
    const [data , setData] = useState({
        options: {
            chart: {
                id: "basic-bar",
                type: 'bar',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + "تومان";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#7070fb"]
                }
            },
            xaxis: {
              categories: ["جمعه", "پنج شنبه", "چهار شنبه", "سه شنبه", "دوشنبه", "یکشنبه", "شنبه"]
            },
            yaxis: {
                opposite: true
            },
            stroke: {
                curve: 'smooth',
            }
            
        },
        series: [
            {
              name: "فروش این روز",
              data: [2700000 , 210000, 550000, 1800000 , 100000, 3100000, 2500000]
            }
        ],     
    })

    var options = {
        series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
        chart: {
        height: 350,
        type: 'bar',
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
      };

    
    return (
        <div className={style.chart_Card}>
            <CardActionArea className={classes.cardArea}>
                <div className={style.chart_title}>
                    <Typography variant="body1" component="h6">
                        فروش های این هفته
                    </Typography>
                </div>
                <ChartApex
                    options={data.options}
                    series={data.series}
                    width="100%"
                    height="250px"
                />
            </CardActionArea>
        </div>
    )
}

export default Chart;