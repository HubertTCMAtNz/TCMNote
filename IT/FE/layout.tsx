import React from "react";

const styles = createStyles({
  "@global": {
    body: {
      minHeight: "100vh",
      margin: 0
    }
  },
  container: {
    display: "flex",
    flexFlow: "column",
    minHeight: "100vh"
  },
  header: {
    flex: "0 0 auto",
    height: "64px"
  },
  body: {
    flex: 1,
    display: "flex"
  },
  sidebar: {
    flex: "0 0 auto",
    width: "240px"
  },

  detailAndFooterContainer: {
    flex: 1,

    display: "flex",
    flexDirection: "column"
  },

  detail: {
    flex: 1,
    background: "yellow"
  },
  footer: {
    flex: "0 0 auto",
    height: "32px"
  }
});

function Test(props: any) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Header Place Holder</p>
      </div>
      <div className={classes.body}>
        <div className={classes.sidebar}>
          <p>Sidebar Place Holder</p>
        </div>
        <div className={classes.detailAndFooterContainer}>
          <div className={classes.detail}>
            <p>content Place Holder</p>
          </div>
          <div className={classes.footer}>
            <span>foot Place Holder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
