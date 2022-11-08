#!/bin/bash
# This job copies Sample PySpark script and some test data to your S3 bucket which will enable you to run the following Spark Opeartor script
#
# have to run under this folder and have input folder
# change permission chmod +rwx prepare-data.sh

S3_BUCKET="spark-34936187025220221107172337871400000001"
REGION="us-west-2"
JOB_NAME="taxi-trip"

INPUT_DATA_S3_PATH="s3://${S3_BUCKET}/${JOB_NAME}/input/"

# Copy PySpark Script to S3 bucket
aws s3 cp pyspark-taxi-trip.py s3://${S3_BUCKET}/${JOB_NAME}/scripts/ --region ${REGION}

# Copy Test Input data to S3 bucket
wget https://d37ci6vzurychx.cloudfront.net/trip-data/yellow_tripdata_2022-01.parquet -O "input/yellow_tripdata_2022-0.parquet"

# Making duplicate copies to increase the size of the data.
max=20
for (( i=1; i <= $max; ++i ))
do
    cp -rf "input/yellow_tripdata_2022-0.parquet" "input/yellow_tripdata_2022-${i}.parquet"
done

aws s3 sync "input/" ${INPUT_DATA_S3_PATH}