/**
 * @format
 */
import React from "react";
import { Surface, Card } from "react-native-paper";
import { FlatList } from "react-native";

const MovieList = (props: any) => {
  return (
    <Surface>
      <FlatList data={[]} renderItem={() => <></>} />
    </Surface>
  );
};

export default MovieList;
