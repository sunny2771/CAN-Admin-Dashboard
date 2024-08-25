import './BarChartBox.scss';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
    title : string,
    subTitle : string,
    filterVal : string,
    barInfo : string[],
    barChartArray : object[],
}

const BarChartBox = (props:Props) => {
  return (
    <div className='barChartBox'>
        <div className="top">
            <div className="heading">
                <span>{props.title}</span>
                <span>{props.subTitle}</span>
            </div>
            <div className="filter">{props.filterVal} <ExpandMoreOutlinedIcon style={{ fontSize: 12 }} /></div>
        </div>
        <div className="bottom">
            <div className="barInfo">
                <div className='infoBoxes'>
                    <div className="colorBox" style={{background : '#334bff'}}></div>
                    <span>{props.barInfo[0]}</span>
                </div>
                <div className='infoBoxes'>
                    <div className="colorBox" style={{background : '#fd904b'}}></div>
                    <span>{props.barInfo[1]} </span>
                </div>
                <div className='infoBoxes'>
                    <div className="colorBox" style={{background : '#67ab75'}}></div>
                    <span>{props.barInfo[2]} </span>
                </div>
            </div>

            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart
                        data={props.barChartArray}
                    >
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{fill:"none"}}
                        />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="job" stackId="a" fill="#67ab75" />
                        <Bar dataKey="giveaways" stackId="a" fill="#fd904b" />
                        <Bar dataKey="missions" stackId="a" fill="#334bff" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  )
}

export default BarChartBox;