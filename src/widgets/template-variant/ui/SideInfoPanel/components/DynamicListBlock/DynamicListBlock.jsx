import { Typography } from '@/shared/ui/Typography';
import { X, Plus } from 'lucide-react';
import { defaultVariantStyle } from '@/shared/ui/Typography/helpers/constant';
import * as SC from '../../SideInfoPanel.styles';

export const DynamicListBlock = ({
    title,
    items,
    addItem,
    removeItem,
    RenderItem,
}) => (
    <SC.BlockWrapper>
        {title && (
            <SC.TitleWithAction>
                <Typography variant={defaultVariantStyle.subtitle2}>
                    {title}
                </Typography>
                {addItem && (
                    <SC.AddButton onClick={addItem}>
                        <Plus size={16} />
                    </SC.AddButton>
                )}
            </SC.TitleWithAction>
        )}

        {items.map(item => (
            <SC.SkillWrapper key={item.id}>
                <RenderItem item={item} />
                {items.length > 1 && (
                    <SC.DeleteButton onClick={() => removeItem(item.id)}>
                        <X size={10} />
                    </SC.DeleteButton>
                )}
            </SC.SkillWrapper>
        ))}
    </SC.BlockWrapper>
);
