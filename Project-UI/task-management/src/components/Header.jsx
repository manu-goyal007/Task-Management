function Header({ title = "Task Management" }) {
  const styles = {
    container: {
      textAlign: "left",
      padding: "0px",
      marginBottom: "0px",
      width: "180px"
    },
    heading: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#38ec20ff",
      marginBottom: "0px"
    },
    underline: {
      width: "auto",
      height: "4px",
      backgroundColor: "#1ebb2bff",
      margin: "10px auto",
      borderRadius: "2px"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>
      <div style={styles.underline}></div>
    </div>
  );
}

export default Header;
