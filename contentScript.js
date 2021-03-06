const createTab = () => {
  const tab_wrap = document.createElement("div");
  const tab_area = document.createElement("div");
  const tab_label_relation = document.createElement("label");
  const tab_label_comments = document.createElement("label");
  const panel_area = document.createElement("div");
  const panel_relation = document.createElement("div");
  const panel_comments = document.createElement("div");

  tab_wrap.style.margin = "5px auto";

  tab_area.style.fontSize = "0";
  tab_area.style.margin = "0 10px";

  tab_label_relation.textContent = "relation";
  tab_label_relation.style.margin = "0 10px";
  tab_label_relation.style.width = "150px";
  tab_label_relation.style.margin = "0 5px";
  tab_label_relation.style.display = "inline-block";
  tab_label_relation.style.padding = "12px 0";
  tab_label_relation.style.color = "#999";
  tab_label_relation.style.background = "#fff";
  tab_label_relation.style.textAlign = "center";
  tab_label_relation.style.fontSize = "13px";
  tab_label_relation.style.cursor = "pointer";
  tab_label_relation.style.transition = "ease 0.2s opacity";
  tab_label_relation.setAttribute("class", "relation");

  tab_label_comments.textContent = "comments";
  tab_label_comments.style.margin = "0 10px";
  tab_label_comments.style.width = "150px";
  tab_label_comments.style.margin = "0 5px";
  tab_label_comments.style.display = "inline-block";
  tab_label_comments.style.padding = "12px 0";
  tab_label_comments.style.color = "#999";
  tab_label_comments.style.background = "#ddd";
  tab_label_comments.style.textAlign = "center";
  tab_label_comments.style.fontSize = "13px";
  tab_label_comments.style.cursor = "pointer";
  tab_label_comments.style.transition = "ease 0.2s opacity";
  tab_label_comments.setAttribute("class", "comments");

  panel_area.style.display = "flex";
  panel_area.style.height = window.innerHeight - 150 + "px";
  panel_area.style.background = "#fff";

  panel_relation.style.flexGrow = 1;
  panel_relation.style.flexBasis = 0;
  panel_relation.style.overflowY = "scroll";
  panel_relation.width = "100%";
  panel_relation.padding = "80px 0";
  panel_relation.display = "none";

  panel_comments.style.flexGrow = 1;
  panel_comments.style.flexBasis = 0;
  panel_comments.style.overflowY = "scroll";
  panel_comments.width = "100%";
  panel_comments.padding = "80px 0";
  panel_comments.display = "none";
  panel_comments.style.display = "none";

  // mouse on
  const handleMouseOn = (event) => {
    event.target.style.opacity = "0.5";
  };
  tab_label_relation.addEventListener("mouseenter", handleMouseOn, false);
  tab_label_comments.addEventListener("mouseenter", handleMouseOn, false);

  // mouse out
  const handleMouseOut = (event) => {
    event.target.style.opacity = "1";
  };
  tab_label_relation.addEventListener("mouseleave", handleMouseOut, false);
  tab_label_comments.addEventListener("mouseleave", handleMouseOut, false);

  // click
  const handleClick = (event) => {
    panel_relation.style.display = "none";
    panel_comments.style.display = "none";
    tab_label_relation.style.background = "#ddd";
    tab_label_comments.style.background = "#ddd";
    class_name = event.target.className;

    if (class_name == "relation") {
      panel_relation.style.display = "block";
      tab_label_relation.style.background = "#fff";
    } else {
      panel_comments.style.display = "block";
      tab_label_comments.style.background = "#fff";
    }
  };
  tab_label_relation.addEventListener("click", handleClick, false);
  tab_label_comments.addEventListener("click", handleClick, false);

  tab_area.appendChild(tab_label_relation);
  tab_area.appendChild(tab_label_comments);
  panel_area.appendChild(panel_relation);
  panel_area.appendChild(panel_comments);
  tab_wrap.appendChild(tab_area);
  tab_wrap.appendChild(panel_area);

  const setRelationPanel = (child) => {
    panel_relation.appendChild(child);
  };
  const setCommentPanel = (child) => {
    panel_comments.append(child);
  };

  return { tab_wrap, setRelationPanel, setCommentPanel };
};

window.onload = function () {
  const window_h = window.innerHeight;
  const root = document.documentElement;
  root.style.height = "101%";

  const columns = document.getElementById("columns");
  const video = document.getElementById("primary");
  const relation = document.getElementById("secondary");
  const comments = document.getElementById("comments");

  columns.setAttribute("class", "unknown");
  columns.style.display = "flex";
  columns.style.height = window_h - 56 + "px";

  relation.style.height = window_h;
  comments.style.height = window_h;

  const { tab_wrap, setRelationPanel, setCommentPanel } = createTab();
  setRelationPanel(relation);
  setCommentPanel(comments);

  const right = document.createElement("div");
  const left = document.createElement("div");
  const all_info = document.createElement("div");

  right.style.padding = "24px 0 0 0";
  right.style.margin = "0";
  right.style.flex = "1";
  right.style.alignItems = "flex-start";
  right.style.flexBasis = "20%";

  left.style.display = "flex";
  left.style.flex = "auto";
  left.style.flexDirection = "column";

  all_info.style.margin = "0 24px 0 48px";
  all_info.style.padding = "0 24px 0 0";
  all_info.style.flexGrow = 1;
  all_info.style.flexBasis = 0;
  all_info.style.overflowY = "scroll";

  const info_contents = document.getElementById("info-contents");
  const info = document.getElementById("info");
  const meta = document.getElementById("meta");
  const merch_shelf = document.getElementById("merch-shelf");
  const ticket_shelf = document.getElementById("ticket-shelf");

  all_info.appendChild(info_contents);
  all_info.appendChild(info);
  all_info.appendChild(meta);
  all_info.appendChild(merch_shelf);
  all_info.appendChild(ticket_shelf);

  left.appendChild(video);
  left.appendChild(all_info);
  right.appendChild(tab_wrap);

  columns.appendChild(left);
  columns.appendChild(right);
};
