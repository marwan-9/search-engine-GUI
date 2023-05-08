import styles from "./search-bar.module.css";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "./../button/Button";

const Searchbar = () => {
  return (
    <div className={styles["search-bar-wrapper"]}>
      <div className={styles["search-bar-title"]}> 
      <h1>Milkyway Search Engine</h1>
      <span>Search within the universe</span>
      </div>

      <div className={styles["search-bar"]}>
        <Autocomplete
          id="combo-box-demo"
          sx={{ width: "55%", backgroundColor: "rgba(255, 255, 255, 0.15)"}}
          options={[]}
          freeSolo={true}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                style: { height: 75, fontSize: 30, padding: 10, color: "white" },
              }}
            />
          )}
        />
      </div>
      <Button className={styles["search-button"]}> Search</Button>

    </div>
  );
};

export default Searchbar;
