import { BadgeJapaneseYen, BanknoteArrowDown, CircleDollarSign, Landmark, TrendingDown, TrendingUp } from "lucide-react"

const statsData = [
    {
        title: "Profit",
        value: "$240.94",
        percentage: "67.81%",
        isPositive: true,
        icon: CircleDollarSign
    },
    {
        title: "Revenue",
        value: "$1,230.00",
        percentage: "23.45%",
        isPositive: false,
        icon: BanknoteArrowDown
    },
    {
        title: "Expenses",
        value: "$890.50",
        percentage: "12.30%",
        isPositive: false,
        icon: BadgeJapaneseYen
    },
    {
        title: "Growth",
        value: "32.5%",
        percentage: "5.20%",
        isPositive: true,
        icon: Landmark
    }
];

const DashBoardHadder = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center align-centre shadow-custom-sm gap-4'>
            {statsData.map((state, indx) =>
                <article key={indx} className="flex flex-wrap w-full items-center lg:items-end justify-between gap-4 rounded-lg border border-light bg-white p-6">
                    <div className="flex items-center gap-4">
                        <span className="hidden rounded-full bg-light p-2 text-muted-foreground sm:block"><state.icon /></span>
                        <div>
                            <p className="text-small-medium text-muted-foreground">{state.title}</p>
                            <h3 className="text-secondary-foreground">{state.value}</h3>
                        </div>
                    </div>
                    <div className={`inline-flex items-center gap-2 rounded-sm p-1 ${!state.isPositive ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                        {!state.isPositive ? <TrendingUp /> : <TrendingDown />}
                        <span className="text-small-medium"> 67.81% </span>
                    </div>
                </article>
            )}
        </div>
    )
}

export default DashBoardHadder