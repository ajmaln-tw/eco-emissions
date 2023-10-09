
import { useMemo, useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { Circle, FeatureGroup, LayersControl, MapContainer, Marker, Polyline, Popup, ScaleControl, TileLayer, Tooltip, ZoomControl } from "react-leaflet";
import Leaf from "leaflet";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "leaflet/dist/leaflet.css";

import CustomHeader from "../../../modules/common/components/CustomHeader";
import LoadingCustomOverlay from "../../../modules/common/components/LoadingOverlay";
import color from "../../themes/palette.json";
import locationPng from "../../../assets/images/location.png";
import markerPng from "../../../assets/images/blackMarkerDot.png";

import "./styles.css";
import _ from "lodash";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const CustomMap = (props) => {
    const mapRef = useRef(null);
    const { mapJourney = [], title = "", height = "50vh", width = "100%", destination = "", startingPoint = "",
        requestInProgress = false, icon, zoom = 5, borderRadius = "15px", markersList = [], overLay = false,
        overLayComponent } = props;
    const N = mapJourney.length - 1;
    const p11 = mapJourney[0][0] || "";
    const p12 = mapJourney[0][0] || "";

    const p21 = mapJourney[N][0] || "";
    const p22 = mapJourney[N][1] || "";

    const pointOne = destination || `${p11} , ${p12}`;
    const pointTwo = startingPoint || `${p21} , ${p22}`;

    const center = mapJourney[Math.floor(N / 2)];
    useEffect(() => {

    }, []);

    let myIcon = Leaf.icon({
        iconSize: [20, 33],
        iconAnchor: [10, 33],
        popupAnchor: [2, -40],
        iconUrl: locationPng

    });
    const markerIcon = Leaf.icon({
        iconSize: [13, 13],
        iconAnchor: [10, 10],
        popupAnchor: [2, -40],
        iconUrl: markerPng

    });
    function EmissionMarkers({ locations }) {
        const markers = useMemo(() => {
            return !_.isEmpty(markersList) && markersList.map(({ cosx, nox, lat, lng }, idx) => (
                <Marker position={[lat, lng]} key={`${idx}${cosx}${nox}`} icon={markerIcon}>
                    <Tooltip placement="top">{`COx: ${cosx}, NOx: ${nox}`}</Tooltip>
                </Marker>
            ));
        }, [locations]);
        return <>{markers}</>;
    }

    return (
        <Grid className="containerCustomMap">
            <LoadingCustomOverlay active={requestInProgress} spinnerProps="map">
                <CustomHeader content={title} />
                <div style={{ height, width, display: "flex", justifyContent: "center", position: "relative" }}>
                    <MapContainer
                        ref={mapRef}
                        center={center}
                        zoom={zoom}
                        zoomControl={false}
                        style={{
                            height: "inherit", width: "inherit", borderRadius: borderRadius,
                            top: 0,
                            left: 0,
                            position: "absolute"
                        }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            className={props.className}
                        />
                        <Marker position={mapJourney[0]} icon={icon || myIcon}>
                            <Popup>
                                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{pointOne}</Typography>
                            </Popup>
                        </Marker>
                        <Marker position={mapJourney[N]} icon={icon || myIcon}>
                            <Popup>
                                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{pointTwo}</Typography>
                            </Popup>
                        </Marker>
                        <FeatureGroup pathOptions={{ color: "royalblue" }}>
                            <Popup>
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{" TEst"}</Typography>
                            </Popup>
                            <Circle center={mapJourney[0] || [51.51, -0.1]} />
                        </FeatureGroup>
                        <Polyline
                            pathOptions={{ color: color.palette.green.dark }}
                            positions={mapJourney}
                            weight={2}
                        >
                        </Polyline>
                        {markersList.length > 0 && <EmissionMarkers locations={markersList} />}
                        <ZoomControl position="topright" />

                        {/* Add a ScaleControl */}
                        <ScaleControl position="bottomleft" />

                        {/* Add a LayersControl */}
                        <LayersControl position="topright" className="layerControl">
                            {/* Base Layers */}
                            <LayersControl.BaseLayer checked name="Simple Map">
                                <TileLayer
                                    url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}"
                                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                                    accessToken={mapboxgl.accessToken}
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="World Map">
                                <TileLayer
                                    url="https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}"
                                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                                    accessToken={mapboxgl.accessToken}
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Dark Map">
                                <TileLayer
                                    url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}"
                                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                                    accessToken={mapboxgl.accessToken}
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Standard Map">
                                <TileLayer
                                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}"
                                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                                    accessToken={mapboxgl.accessToken}
                                />
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Satellite Map">
                                <TileLayer
                                    url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}"
                                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                                    accessToken={mapboxgl.accessToken}
                                />
                            </LayersControl.BaseLayer>
                            {/* Add your overlay layers here */}
                        </LayersControl>
                    </MapContainer>
                    {overLay && <div className="MapOverLayContainer01">
                        {overLayComponent}
                    </div>}
                </div>
            </LoadingCustomOverlay>
        </Grid >
    );
};

export default CustomMap;
