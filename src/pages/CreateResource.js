import React, { useEffect, useState } from "react";
import axios from "axios";

import CreateHeader from "../components/CreateHeader";
import CreateResourceForm from "../components/CreateResourceForm";

import classes from "../sass/pages/createResource.module.scss";

const createResource = async (
  resourceType,
  resourceTitle,
  resourceDescription,
  resourceLink,
  resourceAttachment
) => {
  const formData = new FormData();
  formData.append("type", resourceType);
  formData.append("title", resourceTitle);
  formData.append("description", resourceDescription);

  if (resourceLink) formData.append("link", resourceLink);
  if (resourceAttachment && resourceAttachment.length !== 0)
    formData.append("file", resourceAttachment);

  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/resources`,
    withCredentials: true,
    data: formData,
  });

  return res;
};

const CreateResource = () => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [resourceType, setResourceType] = useState("attachment");

  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceDescription, setResourceDescription] = useState("");
  const [resourceLink, setResourceLink] = useState("");
  const [resourceAttachment, setResourceAttachment] = useState("");

  useEffect(() => {
    if (resourceType === "attachment") return;

    if (resourceType === "link") setResourceAttachment(() => "");
  }, [resourceType]);

  useEffect(() => {
    if (
      !resourceTitle ||
      resourceTitle.length === 0 ||
      resourceTitle.replace(/\s+/g, "") === "" ||
      !resourceDescription ||
      resourceDescription.replace(/\s+/g, "") === "" ||
      resourceDescription.length === 0
    )
      return setBtnIsActive(() => false);

    if (resourceType === "link" && !resourceLink && resourceLink.trim() !== " ")
      return setBtnIsActive(() => false);

    return setBtnIsActive(() => true);
  }, [
    resourceType,
    resourceTitle,
    resourceDescription,
    resourceLink,
    resourceAttachment,
  ]);

  const createResourceHander = async () => {
    try {
      const res = await createResource(
        resourceType,
        resourceTitle,
        resourceDescription,
        resourceLink,
        resourceAttachment
      );

      setResourceTitle(() => "");
      setResourceDescription(() => "");
      setResourceLink(() => "");
      setResourceAttachment(() => "");

      window.alert("New resource created successfully!");
    } catch (err) {
      console.log("err from the outside catch: ", err);
      console.log(err.response.data);
    }
  };

  return (
    <div className={classes["create-resource-page"]}>
      <CreateHeader
        backLink="/tab-pages/resources"
        btnIsActive={btnIsActive}
        btnOnClickHandlerFn={createResourceHander}
      />

      <h1 className={classes["create-resource__heading"]}>Create Resource</h1>

      <CreateResourceForm
        resourceType={resourceType}
        setResourceType={setResourceType}
        resourceTitle={resourceTitle}
        setResourceTitle={setResourceTitle}
        resourceDescription={resourceDescription}
        setResourceDescription={setResourceDescription}
        resourceLink={resourceLink}
        setResourceLink={setResourceLink}
        resourceAttachment={resourceAttachment}
        setResourceAttachment={setResourceAttachment}
      />
    </div>
  );
};

export default CreateResource;
