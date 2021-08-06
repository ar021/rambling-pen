import Post from "../../components/Post/Post";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import ShowPost from "../../components/ShowPost/ShowPost";
import "./ShowPage.css";

export default function ShowPage(props) {
  const post = props.location.location.state.post;
  return (
    <div className="showPage">
      <ShowPost key={post._id} post={post} />
      <ProfileSection />
    </div>
  );
}
