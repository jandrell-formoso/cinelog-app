/**
 * @format
 */
import React, { useState, useEffect } from "react";
import { Surface, Card } from "react-native-paper";
import { FlatList, Text } from "react-native";
import MovieItem from "../components/MovieItem";
import { MovieApi } from "@cinelog/core";

const MovieList = (props: any) => {
  const [movies] = useMovieList();
  console.log("movies", movies)
  // deconstruct props
  const { data } = props;
  return (
    <Surface>
      <FlatList data={data} renderItem={() => <MovieItem />} />
    </Surface>
  );
};

const useMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MovieApi.getMoviesByPopularity();
        setMovies(result);
        return result;
      } catch (error) {
        return error;
      }
    }
    fetchData();
  }, []);

  return [movies];
}

export default MovieList;
