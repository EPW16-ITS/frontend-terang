import Typography from "@/components/Typography"
import ParticlesBackground from "@/utilities/particlebg/particlebackground"



export default function ComingSoonDashboard() {
    return (
        <div className="h-full overflow-hidden w-full flex flex-col  items-center justify-center">
            
            <Typography.Righteous level={1} className="text-white">Coming Soon !!</Typography.Righteous>
            <Typography.Righteous level={5} className="text-white">Ooops, Sorry This Page still in Under Developtment</Typography.Righteous>
        </div>
    )
}