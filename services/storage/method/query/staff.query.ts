import cockroachStorage from 'services/storage/cockroach.storage'
import { StaffQuery } from 'models/api/staff.model'

export const staff = async (): Promise<StaffQuery[]> =>
	cockroachStorage()`
      SELECT staff.*, team_staff.team_id 
      FROM staff, team_staff 
      WHERE staff.id = team_staff.staff_id 
      ORDER BY staff.lastname ASC`

export const staffByTeamId = async (parameters: any[]): Promise<StaffQuery[]> =>
	cockroachStorage()`
      SELECT staff.*, team_staff.team_id 
      FROM staff, team_staff 
      WHERE team_staff.team_id = ${parameters[0]} 
      ORDER BY staff.lastname ASC`
