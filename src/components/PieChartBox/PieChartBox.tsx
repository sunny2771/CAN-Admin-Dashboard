import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './PieChartBox.scss';

interface PieChartDataItem {
    name: string;
    value: number;
    color: string;
    total?: number;
}

interface PieChartProps {
    data: PieChartDataItem[];
    title : string;
}

const PieChartBox: React.FC<PieChartProps> = ({ data, title }) => {
  return (
    <div className='pieChartBox'>
        <div className="top">
            <div className="left">
                <span>{title}</span>
                <div>6.4 K Total</div>
            </div>

            <div className="right">
                <div className="filter">All time <ExpandMoreOutlinedIcon style={{ fontSize: 12 }} /></div>
            </div>
        </div>
        <div className="bottom">
            <div className="chart">
                <ResponsiveContainer width="99%" height={100}>
                    <PieChart>
                        <Tooltip
                        contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"110%"}
                            paddingAngle={5}
                            dataKey="value"
                            >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="statistics">
                {data.map((item) => (
                    <div className="stattisticsVal">
                        <div className="stattisticsInfo">
                            <div className="dot" style={{background : item.color}}></div>
                            <div className="details">
                               {item.total ? <span>{item.total}k</span> : ''} 
                                <span className="stattisticsName">{item.name}</span>
                            </div>
                        </div>
                        <span className="stattisticsName">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PieChartBox;