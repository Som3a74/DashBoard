import AreaChartStacked from "./section/AreaChartStacked";
import DashBoardHadder from "./section/DashBoardHadder";
import { BarChartMultiple } from "./section/BarChartMultiple";
import { DonutChart } from "./section/DonutChart";
import { LineChartLabels } from "./section/LineChartLabels";


const DashBoard = () => {
  return (
    <section className="custom-container">
      <div className="space-y-6">
        <DashBoardHadder />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AreaChartStacked />
          <BarChartMultiple />
          <DonutChart />
          <LineChartLabels />
        </div>
      </div>
    </section>
  )
}

export default DashBoard