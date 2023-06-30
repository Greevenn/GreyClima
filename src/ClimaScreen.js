import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';


//componente ClimaScreen como una función que devuelve la
//interfaz de usuario de la lista con el estado del clima de los países.
function ClimaScreen() {
    const [climaData, setClimaData] = useState(null);
    const countries = [
        'Nicaragua',
        'Guatemala',
        'Costa Rica',
        'Honduras',
        'El Salvador'
        
        
    ];

    useEffect(() => {
        const fetchClimaData = async () => {
            try {
                const responsePromise = countries.map(country =>
                    axios.get(
                        `http://api.weatherapi.com/v1/current.json?key=7be239563a974f70b6c195854233006&q=${country}&lang=es`,
                    ),
                );
                const responses = await Promise.all(responsePromise);
                const climaDataArray = responses.map(response => response.data);
                setClimaData(climaDataArray);
            } catch (error) {
                console.error(error);
            }
        };
        fetchClimaData();
    }, []);

    
    
}