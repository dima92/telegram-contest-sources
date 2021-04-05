import {chart} from './chart'
import data from './data.json'
import './styles.scss'

const tgChart = chart(document.getElementById('chart'), data[4])
tgChart.init()

