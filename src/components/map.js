import React, { useEffect, useRef, useState } from "react";
import Header from "./common/header";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { Paper, Typography, Button, Select } from "@material-ui/core";
import { connect } from "react-redux";
import { getCoordinates, getAllAdresses } from "../modules/actions";

function TaxiMap(props) {
  const mapContainer = useRef(null);
  const [toAdr, setToAdr] = useState();
  const [fromAdr, setFromAdr] = useState();
  let { coordinates, addresses } = props.orderReducer;

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2hha2VzcGVhcjIyMTEiLCJhIjoiY2tvanc3bXF2MDJqaTJwbnBuY3o4ZG52cSJ9.wixdaE4ceQASYslGCy6uAw";

  const drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 12,
      center: [30.2656504, 59.8029126],
    });
    map.on("style.load", () => drawRoute(map, coordinates));
  });

  useEffect(() => {
    props.getAllAdresses();
  }, []);

  const mapStyle = {
    position: "absolute",
    top: "68px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
  };
  const orderCardStyle = {
    position: "absolute",
    top: "100px",
    left: "20px",
    width: "550px",
    padding: "40px 70px",
    zIndex: "1000",
  };
  const cardData = JSON.parse(localStorage.getItem("cardData"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.from.value);
    console.log(e.target.where.value);
    props.getCoordinates({
      adress1: e.target.from.value,
      adress2: e.target.where.value,
    });
  };
  return (
    <div data-testid='map-container'>
      <Header />
      {cardData &&
      cardData.cardNumber &&
      cardData.cardName &&
      cardData.cvc &&
      cardData.expiryDate ? (
        <Paper style={orderCardStyle} name='withCardInfo'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Select
              name='from'
              style={{ width: "100%" }}
              placeholder='Откуда'
              native
              value={fromAdr}
              onChange={(e) => setFromAdr(e.target.value)}>
              <option value=''></option>
              {addresses
                .filter((item) => item !== toAdr)
                .map((addresse, i) => (
                  <option key={i} value={addresse}>
                    {addresse}
                  </option>
                ))}
            </Select>
            <Select
              name='where'
              style={{ width: "100%", margin: "40px 0" }}
              placeholder='Куда'
              native
              value={toAdr}
              onChange={(e) => setToAdr(e.target.value)}>
              <option value=''></option>
              {addresses
                .filter((item) => item !== fromAdr)
                .map((addresse, i) => (
                  <option key={i} value={addresse}>
                    {addresse}
                  </option>
                ))}
            </Select>
            <Button style={{ width: "100%" }} variant='contained' color='primary' type='submit'>
              Заказать такси
            </Button>
          </form>
        </Paper>
      ) : (
        <Paper name='noCardInfo' style={orderCardStyle}>
          <Typography variant='h4'>Заполните платежные данные</Typography>
          <Typography style={{ margin: "30px 0" }} variant='subtitle1'>
            Укажите информацию о банковской карте, чтобы сделать заказ.
          </Typography>
          <Button style={{ width: "100%" }} variant='contained' color='primary'>
            Перейти в профиль
          </Button>
        </Paper>
      )}

      <div ref={mapContainer} style={mapStyle}></div>
    </div>
  );
}

TaxiMap.propTypes = {
  goToPage: PropTypes.func,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getCoordinates, getAllAdresses };

export default connect(mapStateToProps, mapDispatchToProps)(TaxiMap);
