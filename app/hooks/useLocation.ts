import * as Location from "expo-location";
import { useState } from "react";
import logger from "../utility/logger";

const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>();

  Location.requestForegroundPermissionsAsync()
    .then((res) => {
      if (!res.granted) return;
      Location.getLastKnownPositionAsync().then((loc) => {
        if (loc !== undefined || null) {
          setLocation(loc);
        }
      });
    })
    .catch((err) => logger.log(err));

  return location;
};
export default useLocation;
