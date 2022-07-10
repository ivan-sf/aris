import {Router} from 'express'
import {createAudit,getAudits,updateAudits,deleteAudits,getAuditId} from '../controllers/audit.controller'
const router = Router()

router.post('/api/audit/create',createAudit)
router.get('/api/audit',getAudits)
router.get('/api/audit/:id',getAuditId)
router.put('/api/audit/:id',updateAudits)
router.delete('/api/audit/:id',deleteAudits)

export default router