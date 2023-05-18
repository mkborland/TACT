import React, { useCallback, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios'
import { getAmadeusData } from "../../api/amadeus.api";
import { debounce } from "lodash"




const LocationField = (props) => {
  // const [psearch, psetSearch] = React.useState({
  //   keyword: "",
  //   city: true,
  //   airport: true,
  //   page: 0
  // });
  // props['search'] = psearch
  // props['setSearch'] = psetSearch
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const [keyword, setKeyword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // Configure options format for proper displaying on the UI
  const names = options.map(i => ({ type: i.subType, name: i.name, iataCode: i.iataCode }));

  // Debounce func prevents extra unwanted keystrokes, when user triggers input events 
  const debounceLoadData = useCallback(debounce(setKeyword, 1000), []);

  useEffect(() => {
    debounceLoadData(search);
  }, [search]);

  // Same example as in *SearchRoot* component
  React.useEffect(() => {

    setLoading(true)
    // const { out, source } = getAmadeusData({ ...props.search, page: 0, keyword });
    const { out, source } = getAmadeusData({ ...search, page: 0, keyword });

    out.then(res => {
      if (!res.data.code) {
        setOptions(res.data.data);

      }
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setOptions([]);
      setLoading(false)

    });

    return () => {
      source.cancel()
    };
  }, [keyword]);

  // Desctructuring our props
  // const { city, airport } = props.search
  const { city, airport } = search

  let label = city && airport ? "City and Airports" : city ? "City" : airport ? "Airports" : ""

  if (props.label){
      label = props.label
  }

  return (
    // This is Material-UI component that also has it's own props
    <>
      <Autocomplete
        id="asynchronous-demo"
        disabled={props.disabled}
        style={{ width: 300, marginBottom: "1rem" }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) =>
          option.name === value.name && option.type === value.type && option.iataCode === value.iataCode
        }
        onChange={(e, value) => {
          if (value && value.name) {
            // props.setSearch((p) => ({ ...p, keyword: value.name, page: 0 }))
            setSearch(value.name + ' (' + value.iataCode + ')')
            props.chooseInputs(props.name, value.iataCode)
            return;
          }
          setSearch("")
          // props.setSearch((p) => ({ ...p, keyword: "", page: 0 }))

        }}
        getOptionLabel={option => {
          return option.name + ' (' + option.iataCode + ')';
        }}
        options={names}
        loading={loading}
        renderInput={params => {
          return (
            <TextField
              disabled={props.disabled}
              label={label}
              fullWidth
              onChange={e => {
                e.preventDefault();
                setSearch(e.target.value);

              }}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                value: search
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          );
        }}
      />
    </>
  )
};

export default LocationField;
