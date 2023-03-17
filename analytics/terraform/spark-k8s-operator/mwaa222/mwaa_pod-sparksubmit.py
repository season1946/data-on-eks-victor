"""
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"""
from kubernetes.client import models as k8s
from airflow import DAG
from datetime import datetime
from airflow.providers.cncf.kubernetes.operators.kubernetes_pod import (
    KubernetesPodOperator,
)

default_args = {
   'owner': 'aws',
   'depends_on_past': False,
   'start_date': datetime(2019, 2, 20),
   'provide_context': True
}

dag = DAG(
   'kubernetes_pod-sparksubmit', default_args=default_args, schedule_interval=None)

#use a kube_config stored in s3 dags folder for now
kube_config_path = '/usr/local/airflow/dags/kube_config.yaml'
environments = [k8s.V1EnvVar(name='SPARK_HOME', value='/opt/spark')]

podRun = KubernetesPodOperator(
                       namespace="mwaa",
                       image="apache/spark:v3.2.1",
                       cmds=["/bin/sh"],
                      # pod_runtime_info_envs  =environments,
                       service_account_name = "spark",
                       security_context ={"runAsUser": 0},
                       arguments=["-c", "/opt/spark/bin/spark-submit --master k8s://https://B72EDB1FE2074407F7C6E2568961F935.gr7.us-west-2.eks.amazonaws.com --deploy-mode cluster  --conf spark.kubernetes.container.image=apache/spark:v3.2.1 --conf spark.kubernetes.namespace=mwaa  --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark --conf spark.executor.memory=2G --conf spark.executor.cores=2  --class org.apache.spark.examples.SparkPi local:///opt/spark/examples/jars/spark-examples_2.12-3.2.1.jar"],
                       labels={"foo": "bar"},
                       name="mwaa-pod-test",
                       task_id="pod-task",
                       get_logs=True,
                       dag=dag,
                       is_delete_operator_pod=False,
                       config_file=kube_config_path,
                       in_cluster=False,
                       cluster_context='mwaa'
                       )