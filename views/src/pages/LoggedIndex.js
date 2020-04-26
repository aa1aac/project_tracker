import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

import { getProjects, getMoreProjects } from "../store/actions/project/project";

import ProjectItem from "../components/projectItem/ProjectItem";

const LoggedInIndex = (props) => {
  window.onscroll = debounce(() => {
    // if(!this.props.projects.hasMore) return;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      props.getMoreProjects(props.projects.length);
    }
  }, 150);

  useEffect(() => {
    props.getProjects();
    document.title = "tracker";
  }, []);

  return (
    <div className="container">
      <div className="row">
        {props.projects.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps, { getProjects, getMoreProjects })(
  LoggedInIndex
);
