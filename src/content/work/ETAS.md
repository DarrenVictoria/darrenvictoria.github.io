---
title: ETAS - IOT Device
publishDate: 2024-05-07 00:00:00
img: /assets/projects/ETAS/thumbnail.jpeg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  Enviro Track Aqua Shield
tags:
  - IOT
  - Arduino
  - C++
---

# ETAS (Enviro Track Aqua Shield)

ETAS (Enviro Track Aqua Shield) is an IoT-based water filtration monitoring system that leverages various sensors and modules to collect and analyze crucial water quality parameters. The project aims to provide a comprehensive solution for continuous monitoring and management of water bodies, enabling proactive measures to maintain optimal water quality.

## Hardware Integration

ETAS incorporates an array of sensors and modules to gather comprehensive data on water quality parameters. These include:

- -Liquid pH Sensor
- -Temperature Sensor (DS18B20)
- -Analog Total Dissolved Solids (TDS) Sensor
- -Analog Turbidity Sensor
- -SIM900 Module (GPRS Communication)
- -NEO 6M GPS Module (Geolocation)

These components are seamlessly integrated with an Arduino Mega microcontroller board, which acts as the central processing unit for data collection and communication.

## Data Transmission

The SIM900 module plays a crucial role in facilitating data transmission from the Arduino device to a remote server. Leveraging the GPRS protocol, the system sends HTTP POST and GET requests containing sensor data in JSON format to the server.

## Server Infrastructure

The project utilizes a Linux Droplet from DigitalOcean as the server infrastructure. The server hosts the following components:

- **-MariaDB Database**: A relational database system for storing and managing sensor data.
- **-Port Listener**: A component that handles incoming data requests, extracts JSON payloads, and stores the data in the MariaDB database.
- **-Graphical User Interface (GUI)**: A web-based dashboard built using Flask and Plotly libraries for data visualization and analysis.

## Data Analysis and Visualization

The GUI provides users with an interactive dashboard featuring real-time updates, periodical data aggregation, and spatial visualization through heat maps. Users can analyze water quality trends, patterns, and purity indices based on the collected sensor data.

## Device Live in Action

<video autoplay loop muted playsinline>
  <source src="/assets/projects/ETAS/demo_video.mp4" type="video/mp4">
</video>



<div style="display: flex; justify-content: center;">
  <img src="/assets/projects/ETAS/wiring.jpeg" alt="Wiring of the ETAS" style="width: 55%; margin-right: 10px;">
  <img src="/assets/projects/ETAS/with_dashboard.jpeg" alt="Dashboard analytics Data collection" style="width: 55%;">
</div>

