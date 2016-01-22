CREATE OR REPLACE VIEW v_actuele_terreinen AS 
 SELECT *
   FROM bedrijventerrein
  WHERE bedrijventerrein.workflow_status::text = 'definitief'::text;
