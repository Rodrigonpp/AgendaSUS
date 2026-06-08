from unittest.mock import patch

def test_create_appointment_success(client):
    """Testa a criação de um agendamento isolando o banco de dados com Mock."""
    payload = {
        "patient_id": 1,
        "free_schedule_id": 999  
    }
    
    
    with patch('controllers.appointment_controller.do_appointment') as mock_do_appointment:
        
        mock_do_appointment.return_value = True
        
        response = client.post('/api/add_appointment', json=payload)
    
    # como o mock evitou o erro do banco, o controller vai retornar 201 com sucesso!
    assert response.status_code == 201
    assert response.json == {'Mensagem: ': 'Consulta agendada com sucesso.'}