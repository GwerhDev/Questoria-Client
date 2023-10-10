import { CourseOverview } from "../components/CourseOverview/CourseOverview";
import { Presentation } from "../components/Presentation/Presentation";

const Home = () => {
  return (
    <div className="container">
      <Presentation/>
      <CourseOverview/>
    </div>
  )
}

export default Home;