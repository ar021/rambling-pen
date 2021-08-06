import ProfileSection from "../../components/ProfileSection/ProfileSection";
import ShowPost from "../../components/ShowPost/ShowPost";
import "./ShowPage.css";

export default function ShowPage(props) {
  const post = props.location.location.state.post;
  const history = props.location.history;
  return (
    <div className="showPage">
      <ShowPost
        key={post._id}
        post={post}
        handleDeletePost={props.handleDeletePost}
        history={history}
      />
      <ProfileSection />
    </div>
  );
}
