# ref https://gist.github.com/imsharadmishra
from datetime import datetime, timedelta
from airflow import DAG
from airflow.hooks.base_hook import BaseHook
from airflow.contrib.operators.slack_webhook_operator import SlackWebhookOperator
from kubernetes.client import models as k8s
from airflow.providers.cncf.kubernetes.operators.kubernetes_pod import KubernetesPodOperator
import uuid

# This section defines default configuration for DAG
dag_default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2021, 5, 6, 12, 40)
}

# This section defines DAG configuration
dag = DAG(dag_id='k8s-example-2',
          description='k8s-pod-operator example',
          tags=['example', 'k8s-pod-operator'],
          is_paused_upon_creation=True,
          catchup=False,
          schedule_interval='*/2 * * * *',
          max_active_runs=1,
          default_args=dag_default_args)

# This section defines default_env_vars configuration
default_env_vars = {}

job_name = "k8s-job"
meta_name = 'k8s-pod-' + uuid.uuid4().hex
metadata = k8s.V1ObjectMeta(name=(meta_name))
full_pod_spec = k8s.V1Pod(
    metadata=metadata,
  )

# This section defines KubernetesPodOperator
t_1 = KubernetesPodOperator(
    namespace="airflow",
    name=job_name,
    is_delete_operator_pod=True,
    hostnetwork=False,
    startup_timeout_seconds=1000,
    get_logs=True,
    task_id=job_name,
    full_pod_spec=full_pod_spec,
    pod_template_file="/opt/airflow/dags/pod_template_file_example.yaml",
    dag=dag)