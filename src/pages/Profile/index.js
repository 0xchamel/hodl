import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProfile, updateProfile } from "../../reducers/user";

import "./Profile.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [validVideo, setValidVideo] = useState(true);

  const { accessToken, refreshToken, user: userData } = useSelector(
    (state) => state.user
  );
  const [profileInfo, setProfileInfo] = useState(userData);
  const [notification, setNotification] = useState("");

  const handleUpdate = (e) => {
    if (e) e.preventDefault();
    dispatch(
      updateProfile(
        accessToken,
        profileInfo.userId,
        profileInfo.firstName,
        profileInfo.lastName,
        profileInfo.email,
        profileInfo.password,
        profileInfo.videoUrl,
        profileInfo.essay,
        profileInfo.tags,
        profileInfo.title
      )
    ).then((res) => {
      setNotification("Your profile has been updated successfully.");
      setTimeout(() => setNotification(""), 5000);
      dispatch(getProfile(accessToken, profileInfo.userId));
    });
  };

  useEffect(() => {
    if (userData && userData.userId) {
      dispatch(getProfile(accessToken, userData.userId));
    }
  }, []);

  useEffect(() => {
    setProfileInfo(userData);
  }, [userData]);

  useEffect(() => {
    if (profileInfo["videoUrl"]) {
      setValidVideo(
        profileInfo["videoUrl"] === "" ||
          profileInfo["videoUrl"].indexOf("https://www.youtube.com/embed/") ===
            0
      );
    }
  }, [profileInfo]);

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={handleUpdate}>
        {notification !== "" && (
          <p className="profile__notification">{notification}</p>
        )}
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={profileInfo["title"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, title: e.target.value })
          }
        />
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={profileInfo["firstName"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, firstName: e.target.value })
          }
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={profileInfo["lastName"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, lastName: e.target.value })
          }
        />
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          value={profileInfo["email"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, email: e.target.value })
          }
        />
        {/* <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          value={profileInfo["password"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, password: e.target.value })
          }
        /> */}
        <label>Video Url</label>
        <input
          type="text"
          placeholder="Video URL"
          value={profileInfo["videoUrl"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, videoUrl: e.target.value })
          }
        />
        <label>Essay</label>
        <textarea
          type="text"
          placeholder="Essay"
          value={profileInfo["essay"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, essay: e.target.value })
          }
        />
        <label>Tags</label>
        <textarea
          type="text"
          placeholder="Tags"
          value={profileInfo["tags"]}
          onChange={(e) =>
            setProfileInfo({ ...profileInfo, tags: e.target.value })
          }
        />
        <button type="submit" disabled={!validVideo}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
