import './LineChartBox.scss';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { curveCardinal } from 'd3-shape';

type Props = {
    title : string,
    subTitle : string,
    filterVal : string,
    lineChartArray : object[],
}

const cardinal = curveCardinal.tension(0.2);

const LineChartBox = (props : Props) => {
  return (
    <div className='lineChartBox'>
        <div className="top">
            <div className="heading">
                <span>{props.title}</span>
                <span>{props.subTitle}</span>
            </div>
            <div className="filter">{props.filterVal} <ExpandMoreOutlinedIcon style={{ fontSize: 12 }} /></div>
        </div>
        <div className="bottom">
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <AreaChart
                    data={props.lineChartArray}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='amt' />
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{fill:"none"}}
                    />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#fc741e" fill="#fff1e9" />
                    <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  )
}

export default LineChartBox;