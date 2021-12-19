import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { github } from "../portfolio";
import Loading from "../components/Loading";
import GithubProfileCard from "../components/GithubProfileCard";
const GithubProfile = () => {
  const [prof, setProf] = useState({});
  const query = `https://api.github.com/users/${github.username}`;
  const getProfileData = async (q) => {
    await axios
      .get(q)
      .then((res) => setProf(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProfileData(query);
  }, [query]);
  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard prof={prof} />
    </Suspense>
  );
};

export default GithubProfile;
