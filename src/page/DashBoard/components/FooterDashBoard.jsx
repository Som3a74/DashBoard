import { TrendingUp } from "lucide-react"

const FooterDashBoard = ({ title, description, icon = TrendingUp }) => {
    const IconToRender = icon
    return (
        <div className="mt-6 pt-4 border-t border-light">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-medium">
                    <span className="text-base-medium text-foreground">{title}</span>
                    <IconToRender className="size-4 text-green-500" />
                </div>
                <span className="text-gray-500 text-base-medium">{description}</span>
            </div>
        </div>
    )
}

export default FooterDashBoard