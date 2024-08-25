import PieChartBox from '../../components/PieChartBox/PieChartBox';
import './Dashboard.scss';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { pieChartBrandedData, pieChartMissionData, middleRowData, lineChartData} from '../../data';
import BarChartBox from '../../components/BarChartBox/BarChartBox';
import {barChartData} from '../../data';
import LineChartBox from '../../components/LineChartBox/LineChartBox';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
      <div className="content">
        {/* First row with 3 sections */}
        <div className="row">
          <div className="col-l">
            <div className="top">
              <div className="left">
                <span>Total No. of Opportunities</span>
                <span>6.4 k</span>
              </div>
              <div className="right">
                <div className="filter">All time <ExpandMoreOutlinedIcon style={{ fontSize: 12 }} /></div>
              </div>
            </div>
            <div className="progress"></div>
            <div className="bottom">
              <div className="box">
                <div className="colorBox" style={{background : '#fd904b'}}></div>
                <span>2.3 K</span>
                <span>No. of Missions</span>
              </div>
              <div className="box">
                <div className="colorBox" style={{background : '#334bff'}}></div>
                <span>2.3 K</span>
                <span>No. of Giveaways</span>
              </div>
              <div className="box">
                <div className="colorBox" style={{background : '#67ab75'}}></div>
                <span>2.3 K</span>
                <span>No. of Jobs/Internship</span>
              </div>
            </div>
          </div>
          <div className="col">
            <PieChartBox title='Branded vs Non-Branded' data={ pieChartBrandedData } />
          </div>
          <div className="col">
            <PieChartBox title='Mission Status' data={ pieChartMissionData } />
          </div>
        </div>
        
        {/* Second row with 8 sub sections */}
        <div className="row">
          <div className="middle-col">
            {middleRowData.map((item) => {
              const IconComponent = item.icon;
              return (
                  <div className="inner-row" key={item.title}>
                    <span className='icons'><IconComponent sx={{ fontSize: 20, height : 40 }} /></span>
                    <div className="info">
                      <span>{item.count}</span>
                      <p>{item.title}</p>
                    </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Third row with 2 sub sections */}
        <div className="row row-l">
          <div className="col">
            <BarChartBox {...barChartData} />
          </div>
          <div className="col">
          <LineChartBox {...lineChartData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;