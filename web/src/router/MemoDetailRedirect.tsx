import { Navigate, useParams } from "react-router-dom";

const MemoDetailRedirect = () => {
  const { uid } = useParams();
  return <Navigate to={`/posts/${uid}`} replace />;
};

export default MemoDetailRedirect;
